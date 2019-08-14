var
	lastTrack,
	showingTrack,
	showingTrackStruct,
	trackHistoryItemHeight = 48, // average
	airTitleHeight = 135,
	trackHistoryAmount = 0,
	lastVolumeValue = 0;

function rnd(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randword() {
	var s = '';
	var ltr = 'qwertyuiopasdfghjklzxcvbnm';
	while (s.length < 20) {
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


function radioInit() {
	try {

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

		requestListenersCount();

		playerReady = true;
	} catch (e) {
		error("Error: " + e.message);
		playerReady = false;
	}
}

function radioPlay(channel) {

	channel = channel || currentChannel;

	if (playerReady) {
		// Create a player object
		radioPlayer = document.createElement('audio');
		radioPlayer.src = '//station.waveradio.org/' + channel + '?' + randword(); // fixes buffering
		radioPlayer.title = showingTrack;
		radioPlayer.volume = radioGetVolume() / 100;

		radioPlayer.onerror = function() {
			if (nowPlaying) {
				setTempTitle('Сбой, рестарт через секунду...');
				radioStop();

				clearTimeout(playerRestartTimer);
				playerRestartTimer = setTimeout(function() {
					radioPlay();
				}, 1000);
			}
		}

		radioPlayer.oncanplay = function() {
			setTrackInfo(showingTrackStruct);
			clearTimeout(playerRestartTimer);
		}

		radioPlayer.onstalled = function() {
			setTempTitle('Низкая скорость, жду буфер...');
		}

		radioPlayer.onloadstart = function() {
			if (nowPlaying)
				setTempTitle('Буферизация...');
		}

		radioPlayer.play();

		$('#player-switch').attr('class', 'player-switch-playing');

		setVal('player_on', 1);
	} else
		error('ERR: Still loading');
}

function radioStop() {
	if (playerReady && radioPlayer) {
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


function radioGetVolume() {
	var savedVol = getVal('volume');

	if (savedVol == null)
		return 100;
	else
		return parseInt(savedVol);
}

function radioSetVolume(value, userAct) {
	userAct = userAct || false;
	if (value > 100)
		value = 100;
	else if (value < 0)
		value = 0;

	if (radioPlayer != null) {
		radioPlayer.volume = (value / 100);
	}

	if (userAct) {
		radioSaveVolume(value);
	}

	setVolValue(value);
}

function radioSaveVolume(value) {
	setVal('volume', value);
}

function radioToggle(channel) {
	channel = channel || currentChannel;
	if (!playerReady) {
		error('Cannot start player, did not initialize yet');
		return false;
	}
	if (radioPlayer == null) {
		try {
			nowPlaying = true;
			radioPlay(channel);
		} catch (e) {
			error('Error: ' + e.message);
		}
	} else {
		try {
			nowPlaying = false;
			radioStop();
		} catch (e) {
			error('Error: ' + e.message);
		}
	}
}

function setVolValue(value) {
	if (value > 100)
		return;

	// Workaround for this shit called rangeslider
	setTimeout(function() {
		$('#volume').val(value).change();
	}, 50);

	var speaker = $('#volume-speaker');
	if (value > 0) {
		speaker.attr('src', '/assets/sprites/icons/volume.png');
	} else {
		speaker.attr('src', '/assets/sprites/icons/mute.png');
	}
}

function toggleMute() {
	if (radioGetVolume() === 0) {
		if (lastVolumeValue === 0) {
			lastVolumeValue = 50;
		}

		radioSetVolume(lastVolumeValue, false);
	} else {
		lastVolumeValue = radioGetVolume();
		radioSetVolume(0, false);
	}
}

function requestTrackInfo() {
	setTimeout(requestTrackInfo, 5000);

	getCurrentTrack(processBriefResult, true);
}

function getCurrentTrack(onSuccess, isBrief) {
	$.ajax({
		url: '//core.waveradio.org/public/current',
		data: {
			station: 'soviet',
			brief: (isBrief ? '1' : '0')
		},
		dataType: 'json',
		crossDomain: true
	}).done(function(data) {
		onSuccess(data);
	}).fail(function(jq, jx) {
		setTrackInfo('- нет связи -');
	});
}

function getTrackHistory() {

	var amount = Math.floor(calculateHistoryViewport() / trackHistoryItemHeight);

	console.log(calculateHistoryViewport(), trackHistoryItemHeight, amount);

	$.ajax({
		url: '//core.waveradio.org/public/history',
		data: {
			station: 'soviet',
			"amount": 100,
			extend: 1 // to enable artist links
		},
		dataType: 'json',
		crossDomain: true
	}).done(function(data) {
		processTrackHistory(data);
	}).fail(function(jq, jx) {
		console.warn("History error:", jq, jx);
	});
}

/*

<div class="air-time">
0:01
</div>
<div class="air-song">
<span class="air-band">
  -
</span>&nbsp;&mdash;&nbsp;
<span id="air-song-title">
  -
</span>
</div>

*/

function calculateHistoryViewport() {
	var
		naviHeight = $('#navi').height(),
		docHeight = $(document).height();

	return docHeight - (naviHeight + airTitleHeight);
}

function processTrackHistory(data) {
	if (!data || data['status'] === undefined) {
		return;
	}

	var historyHtml = "";

	switch (+data['status']) {
		case 0:

			data['payload'].forEach(function (track) {
				var trackDate = new Date(+track['start_time'] * 1000);

				// Time
				historyHtml += '<div class="air-playlist-item"><div class="air-time">' + ((trackDate.getHours() < 10) ? '0' : '') + trackDate.getHours() + ':' +
					((trackDate.getMinutes() < 10) ? '0' : '') + trackDate.getMinutes() +
					'</div>';


				// Song
				historyHtml += '<div class="air-song">';

				// artist
				if (track['artist_links'] && track['artist_links'].length > 0) {
					var artistLink = track['artist_links'][0]['link_text'];
					historyHtml += '<a class="air-band" href="' + artistLink + '">' + track['artist'] + '</a>';
				} else {
					historyHtml += '<span class="air-band">' + track['artist'] + '</span>';
				}


				// separator
				historyHtml += '&nbsp;&mdash;&nbsp;';

				// title
				historyHtml += '<span class="air-song-title">' + track['track_title'] + '</span>';
				historyHtml += '</div></div>';
			});
			break;

		default:
			historyHtml = '<div class="history-error">Не удалось получить историю эфира, ошибка #' + data['status'] + " (" + data['payload'] + ")</div>";
			break;
	}

	$('#air-playlist').html(historyHtml);
}

function processBriefResult(csRes) {

	if (tempShowing)
		return;

	if (csRes['payload'] !== lastTrack) {
		lastTrack = csRes['payload'];

		getTrackHistory();
		getCurrentTrack(setTrackInfo);
	}
}

function splitTrackInfo(track) {
	return {
		artist: track.substr(0, track.indexOf(' - ')),
		title: track.substr(track.indexOf(' - ') + 3)
	};
}

function setArtistLink(link) {

	var artistObj = $('#player-artist-link');

	if (link) {
		artistObj.attr('href', link);

		artistObj.css({
			'text-decoration': 'underline'
		});

		artistObj.off();
	} else {
		artistObj.attr('href', '#');

		artistObj.css({
			'text-decoration': 'none'
		});

		artistObj.click(function() {
			return false;
		});
	}
}

function setTrackInfo(track) {

	if (!track)
		return;

	var trackToDisplay = '',
		trackStruct = {},
		artistLink = "";

	if (typeof track === 'string') {

		var splitAttempt = splitTrackInfo(track);

		if (splitAttempt.artist && splitAttempt.title) {
			setTrackInfo({ // simulate successful server response
				status: 2,
				payload: splitAttempt
			});
		} else {
			trackToDisplay = track;

			$("#player-title").text(track);

			setArtistLink(undefined);
			$("#player-artist-link").html('&nbsp;');
		}



	} else if (typeof track === 'object') {
		switch (track['status']) {
			case 0: // ok
			case 2: // some db problems but still splitted
				trackToDisplay = track['payload']['artist'] + ' – ' + track['payload']['title'];
				trackStruct = track['payload'];

				showingTrackStruct = track;
				showingTrack = trackToDisplay;

				if (track['payload']['links'] && track['payload']['links'].length > 0) {
					artistLink = track['payload']['links'][0]['link_text'];
				}

				break;

			case 1: // server couldn't parse track info and sends us what it had
				trackStruct = splitTrackInfo(track['payload']['raw_title']);

				showingTrackStruct = {
					status: status,
					payload: trackStruct
				};
				trackToDisplay = showingTrackStruct['payload']['artist'] + ' – ' + showingTrackStruct['payload']['title'];

				showingTrack = trackToDisplay;

				break;

			default:
				error('Bad track info');
				return;
		}

		if (artistLink) {
			setArtistLink(artistLink);
		} else {
			setArtistLink(undefined);
		}

		$("#player-artist-link").text(trackStruct['artist']);
		$("#player-title").text(trackStruct['title']);

		if (trackStruct['city'] && trackStruct['city'] !== "Unknown") {
			$('#player-city').text(trackStruct['city']);
		} else {
			$('#player-city').html('&nbsp;');
		}

		// iOS
		if (radioPlayer != null) {
			radioPlayer.title = trackToDisplay;
		}

		// Android/Chrome
		if ('mediaSession' in navigator && radioPlayer != null) {
			navigator.mediaSession.metadata = new MediaMetadata(trackStruct);
		}
	}
}

function setTempTitle(title) {
	tempShowing = true;

	setTrackInfo(title);
	clearTimeout(trackTimer);
	trackTimer = setTimeout(function() {
		tempShowing = false;
		setTrackInfo(showingTrackStruct);
	}, 5000);
}


// Sovietwave-specific code but may be used anywhere
function requestListenersCount() {
	setTimeout(requestListenersCount, 20000);

	$.ajax({
		url: '//station.waveradio.org/status-json.xsl',
		dataType: 'json',
		crossDomain: true
	}).done(calculateListenersCount);
}


function calculateListenersCount(data) {

	var listenersCount = 0,
		currentPos = 1;

	data.icestats.source.forEach(function(mount) {
		currentPos++;

		if (mount.server_name.indexOf('Sovietwave') > -1)
			listenersCount += mount.listeners;

		if (currentPos === data.icestats.source.length)
			$('#listeners').text(listenersCount);
	});
}