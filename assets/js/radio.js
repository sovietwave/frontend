var RADIO_CURRENT_TRACK;

function rnd(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randword()
{
    var s = '';
    var ltr = 'qwertyuiopasdfghjklzxcvbnm';
    while (s.length < 20)
    {
        s += ltr[rnd(0, 20)];
    }
    return s;
}

var radioPlayer = null,
	playerReady = false,
	currentChannel = '',
	nowPlaying = false,
	playerRestartTimer = null,
	tempShowing = false,
	trackTimer = null;


function radioInit()
{
	try
	{

		var a = document.createElement('audio');
		if (a.canPlayType('audio/aac') != 'no' &&

			// Opera has broken AAC decoder
			(navigator.userAgent.indexOf("Opera") == -1 &&
			navigator.userAgent.indexOf("OPR") == -1 &&

			// Some androids can't play AAC too.
			navigator.userAgent.indexOf("Android") == -1))

			currentChannel = 'soviet';
		else
			currentChannel = 'soviet.mp3';


		a.remove();
		delete a;

		// setupVolumeControl(); 	
		
		// Restore volume settings
		radioSetVolume(radioGetVolume(), false);
		
		// Initialize track info.
		requestTrackInfo();

		playerReady = true;
	}
	catch (e)
	{
		error ("Error: " + e.message);
		playerReady = false;
	}
}

function radioPlay(channel)
{

    channel = channel || currentChannel;

	if (playerReady)
	{
		// Create a player object
		radioPlayer = document.createElement('audio');
		radioPlayer.src = '//station.waveradio.org/'+channel+'?'+randword(); // fixes buffering
		radioPlayer.title = RADIO_CURRENT_TRACK;
		radioPlayer.volume = radioGetVolume() / 100;

		radioPlayer.onerror = function()
		{
			if (nowPlaying)
			{
				setTempTitle('Сбой, рестарт через секунду...');
				radioStop();

				clearTimeout(playerRestartTimer);
				playerRestartTimer = setTimeout(function() {
						radioPlay();
					}, 1000);
			}
		}

		radioPlayer.oncanplay = function()
		{
			setTrackInfo(RADIO_CURRENT_TRACK);
			clearTimeout(playerRestartTimer);
		}

		radioPlayer.onstalled = function()
		{
			setTempTitle('Низкая скорость, жду буфер...');
		}

		radioPlayer.onloadstart = function()
		{
			if (nowPlaying)
				setTempTitle('Буферизация...');
		}
		
		radioPlayer.play();
		
		$('#player-switch').attr('class', 'player-switch-playing');
		
		setVal('player_on', 1);
	}
		else
	error ('ERR: Still loading');
}

function radioStop()
{
	if (playerReady && radioPlayer)
	{
		radioPlayer.pause();
		radioPlayer.src = '';
		radioPlayer.remove();
		delete radioPlayer;

		// Make an object to be NULL to get radioToggle() correct work
		radioPlayer = null;
		
		$('#player-switch').attr('class', 'player-switch-stalled');
		setVal('player_on', 0);
	}
}


function radioGetVolume()
{		
	var savedVol = getVal('volume');

    if (savedVol == null)
        return 100;
    else
        return parseInt(savedVol);
}

function radioSetVolume(value, userAct)
{
	userAct = userAct || false;
	if (value > 100)
		value = 100;
	else if (value < 0)
		value = 0;
			
    if (radioPlayer != null)
    {
        radioPlayer.volume = (value / 100);
    }
		
	if (userAct)
	{
		radioSaveVolume(value);
	}
	
	setVolValue(value);
}

function radioSaveVolume(value)
{
    setVal('volume', value);
}

function radioToggle(channel)
{
	channel = channel || currentChannel;
	if (!playerReady)
	{
		error ('Cannot start player, did not initialize yet');
		return false;
	}
    if (radioPlayer == null)
    {
        try
        {
        	nowPlaying = true;
            radioPlay(channel);
        }
        catch (e)
        {
            error('Error: ' + e.message);
        }
    }
    else
    {
        try
        {
        	nowPlaying = false;
            radioStop();
        }
        catch (e)
        {
            error('Error: ' + e.message);
        }
    }
}

function setVolValue(value)
{	
	console.log (value);

    if (value > 100)
        return;
	
	// Workaround for this shit called rangeslider
	setTimeout(function(){$('#volume').val(value).change()}, 50);
}


function requestTrackInfo()
{
	setTimeout(requestTrackInfo, 15000);

    $.ajax(
    {
        url: '//bits.waveradio.org/api/track/soviet',
        dataType: 'json',
        crossDomain: true
    }).done(
        function (data)
        {
            processResult(data);
        }
    ).fail(function(jq, jx) { setTrackInfo('- проблема связи -') });
}


function processResult(csRes)
{	
	try
	{
		var a = csRes["track"];
	}
	catch (e)
	{
		setTrackInfo('- отказ Центра управления -');
		return;
	}

    if (a == null || typeof a == 'undefined')
    {
        setTrackInfo('- ЦУ недоступен -');
        return;
    }

    if (a == "" || a == '-')
	{
        a = "- неверные данные -";
	}
	
	if (a != RADIO_CURRENT_TRACK)
	{

		RADIO_CURRENT_TRACK = a;

		setTrackInfo (a);
	}
}

function searchArtist(name)
{
	for (i = 0; i < artists.length; i++)
	{
		if (artists[i]['artist'] == name)
		{
			return artists[i]['bandcamp'] ||
				artists[i]['soundcloud'] ||
				artists[i]['vk'] || false;

			break;
		}
	}

	return false;
}

function setTrackInfo (track)
{

	if (!track)
		return;

	var trackParts = track.split(/\s\-\s/),
		artistObj  = $('#player-artist');

	if (trackParts.length == 2) // A correct track info sent
	{
		var
			artistLow  = trackParts[0].toLowerCase(),
			artistLink = searchArtist(artistLow);

		if (artistLink)
		{
			artistObj.css({'border-bottom' : '2px solid #ececec'});
			artistObj.css({'box-shadow' : '0px 2px 2px -2px rgba(0, 0, 0, 0.5)'});
			artistObj.attr('href', artistLink);
			artistObj.off();
		}
			else
		{
			artistObj.css({'border-bottom' : 'none'});
			artistObj.css({'box-shadow' : 'none'});
			artistObj.attr('href', '#');
			artistObj.click(function(){ return false; });
		}

		artistObj.text(trackParts[0]);
		$("#player-title").text(trackParts[1]);

		// iOS
		if (radioPlayer != null)
			radioPlayer.title = trackParts[0] + ' – ' + trackParts[1];

		// Android/Chrome
		if ('mediaSession' in navigator && radioPlayer != null)
		{
			navigator.mediaSession.metadata = new MediaMetadata({
			    title: trackParts[1],
			    artist: trackParts[0]
			  });
		}
	}
		else // some system info sent
	{
		$("#player-title").text(track);

		artistObj.css({'border-bottom' : 'none'});
		artistObj.css({'box-shadow' : 'none'});
		artistObj.attr('href', '#');
		artistObj.click(function(){ return false; });
		artistObj.html('&nbsp;');
	}
}

function setTempTitle(title)
{
	tempShowing = true;
	
	setTrackInfo(title);
	clearTimeout(trackTimer);
	trackTimer = setTimeout(function() {tempShowing = false; setTrackInfo(RADIO_CURRENT_TRACK); }, 5000);
}