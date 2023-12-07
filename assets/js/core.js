var localStorageAvailable = false,
	siteModeOverridden = true,
	currentIndex = 0;
	frameIndex = 0;
	framesCount = 3;
	
var backs = {
	"day": {
		"backs": [
			"/assets/sprites/bg/day0.jpg",
			"/assets/sprites/bg/day1.jpg",
			"/assets/sprites/bg/day2.jpg",
			"/assets/sprites/bg/day3.jpg"
		],

		"backs_mobile": [
			"/assets/sprites/bg/mobile/day0.jpg",
			"/assets/sprites/bg/mobile/day1.jpg",
			"/assets/sprites/bg/mobile/day2.jpg",
			"/assets/sprites/bg/mobile/day3.jpg"
		]
	},

	"evening": {
		"backs": [
			"/assets/sprites/bg/evening0.jpg",
			"/assets/sprites/bg/evening1.jpg",
			"/assets/sprites/bg/evening2.jpg",
			"/assets/sprites/bg/evening3.jpg"
		],

		"backs_mobile": [
			"/assets/sprites/bg/mobile/evening0.jpg",
			"/assets/sprites/bg/mobile/evening1.jpg",
			"/assets/sprites/bg/mobile/evening2.jpg",
			"/assets/sprites/bg/mobile/evening3.jpg"
		]
	},

	"night": {
		"backs": [
			"/assets/sprites/bg/night0.jpg",
			"/assets/sprites/bg/night1.jpg",
			"/assets/sprites/bg/night2.jpg",
			"/assets/sprites/bg/night3.jpg"
		],

		"backs_mobile": [
			"/assets/sprites/bg/mobile/night0.jpg",
			"/assets/sprites/bg/mobile/night1.jpg",
			"/assets/sprites/bg/mobile/night2.jpg",
			"/assets/sprites/bg/mobile/night3.jpg"
		]
	},

	"midnight": {
		"backs": [
			"/assets/sprites/bg/midnight0.jpg",
			"/assets/sprites/bg/midnight1.jpg",
			"/assets/sprites/bg/midnight2.jpg"
		],

		"backs_mobile": [
			"/assets/sprites/bg/mobile/midnight0.jpg",
			"/assets/sprites/bg/mobile/midnight1.jpg",
			"/assets/sprites/bg/mobile/midnight2.jpg"
		]
	},

	"event": {
		"backs": [
			"/assets/sprites/bg/event_vnuku/1.jpg",
			"/assets/sprites/bg/event_vnuku/2.jpg",
			"/assets/sprites/bg/event_vnuku/3.jpg"
		],

		"backs_mobile": [
			"/assets/sprites/bg/event_vnuku/1m.jpg",
			"/assets/sprites/bg/event_vnuku/2m.jpg",
			"/assets/sprites/bg/event_vnuku/3m.jpg"
		]
	},

	"stream": {
		"backs": [
			"/stream/day.jpg",
			"/stream/evening.jpg",
			"/stream/midnight.jpg",
			"/stream/night.jpg"
		]
	}
};

var modes = {
	"day": {
		"title": "Дневной эфир",
		"subtitle": "#chillwave #dreamwave #sovietwave",
		"start": "7:00",
		"finish": "19:00",
		"times": "7:00 — 19:00 МСК"
	},

	"evening": {
		"title": "Вечерний эфир",
		"subtitle": "#synthpop #postpunk #sovietwave",
		"start": "19:00",
		"finish": "0:00",
		"times": "19:00 — 0:00 МСК"
	},

	"night": {
		"title": "Ночной эфир",
		"subtitle": "#ambient #experimental #sovietwave",
		"start": "0:00",
		"finish": "7:00",
		"times": "1:00 — 7:00 МСК"
	},

	"midnight": {
		"title": "Полуночный эфир",
		"subtitle": "#etherial #ambientpop #sovietwave",
		"start": "0:00",
		"finish": "7:00",
		"times": "0:00 — 1:00 МСК"
	},

	"event": {
		"title": "Выходные на улице Карла Юхана",
		"subtitle": "",
		"start": "30 июня",
		"finish": "3 июля",
		"times": "30 июня — 3 июля"
	},

	"event_space": {
		"title": "День Космонавтики",
		"subtitle": "#sovietwave",
		"start": "12 апреля",
		"finish": "14 апреля",
		"times": "12—18 апреля"
	},

	"event2_ssw": {
		"title": "Советская советская волна",
		"subtitle": "#psychedelic #retro",
		"start": "20 ноября",
		"finish": "21 ноября",
		"times": "20—21 ноября"
	},

	"event3_chillwave": {
		"title": "#chillwave",
		"subtitle": "#glofi #hypnagogic #dreamwave",
		"start": "1 декабря",
		"finish": "2 декабря",
		"times": "1—2 декабря"
	}
};

var naviIsEnabled = true;
var airIsEnabled = false;
var linksIsEnabled = false;
var brightIsEnabled = false;
var links;
var air;
var bright;
var navi;
var logo;
var activeLinks;
var activeAir;
var frameOverlay;
var sfxSlide;
var sfxClick;
var coverImage;
var volumeValue = 1;
var frameMobileMode = false;
var player;
var volumeSpeaker;
var volumeContainer;
var streamOverride = false;

function isMobileMode()
{
	if ((document.documentElement.scrollWidth <= 800) ||
		(document.documentElement.scrollHeight <= 500))
			return true;
	return false;
}

function getCurrentMode()
{
	var d = new Date();
	var	nd = new Date(d.getTime() + (10800000)); // 3600000 * 3 (3 - MSK, UTC+3)
	var t = nd.getUTCHours();

	console.log("TTTT " + t);

	if (t >= 1       &&        t < 7) 
		return 'night';

	if (t >= 7       &&        t < 19)
		return 'day';

	if (t >= 0       &&        t < 1)
		return 'midnight';

	return 'evening';
}

function init() {
	localStorageAvailable = isLSAvailable();

	window.addEventListener('resize', (event) => {
		if (frameMobileMode != isMobileMode())
			switchFrame();
	});

	links = $('#panel');
	air = $('#air-panel');
	bright = $('#bright-overlay');
	navi = $('#navi');
	logo = $('#navi-logo');
	activeLinks = $('#panel-active-links');
	activeAir = $('#panel-active-air');
	frameOverlay = $('#frame-overlay');
	coverImage = $('#cover-image');
	player = $("#player-wrapper");
	volumeSpeaker = $("#volume-container");
	volumeContainer = $("#volume-speaker");

 	sfxSlide = new Audio('../assets/sfx/slide.ogg');
 	sfxClick = new Audio('../assets/sfx/click.ogg');
	
	currentIndex = -1;
	//currentIndex = rnd(0, backs[SITE_MODE].backs.length); // Randomize fist pic
	frameIndex = rnd(0, framesCount);

	if (SITE_MODE == 'stream'){
		streamOverride = true;
		console.log("streamOverride");
	}

	if (SITE_MODE == "")
		SITE_MODE = getCurrentMode();

	setTheme(SITE_MODE);

/*
	if (SITE_MODE != 'event' || !siteModeOverridden)
		setInterval(function() {
			var
			d = new Date(),
			nd = new Date(d.getTime() + (10800000)), // 3600000 * 3 (3 - MSK, UTC+3)

			t = nd.getUTCHours();
			m = nd.getUTCMinutes();

			if (t >= 1        &&        t < 7) // night
			{
				if (SITE_MODE != 'night') {
					SITE_MODE = 'night';
					setTheme('night');
				}
			} else if (t >= 7       &&        t < 19) // day
			{
				if (SITE_MODE != 'day') {
					SITE_MODE = 'day';
					setTheme('day');
				}
			} else if (t >= 0       &&        t < 1) // midnight
			{
				if (SITE_MODE != 'midnight') {
					SITE_MODE = 'midnight';
					setTheme('midnight');
				}
			} else // evening
			{
				if (SITE_MODE != 'evening') {
					SITE_MODE = 'evening';
					setTheme('evening');
				}
			}
		}, 30000); // check every 30s  30000
		*/

}

function setTheme(mode) {
	console.log("setTheme " + mode + " / " + SITE_MODE);

	if (modes[mode]) {
		var modeContent = modes[mode];

		$('#air-title').text(modeContent['title']);
		$('#air-tags').text(modeContent['subtitle']);
		$('#air-start-time').text(modeContent['start']);
		$('#air-end-time').text(modeContent['finish']);
		$('#air-times').text(modeContent['times']);
	}

	switchBackground(mode);
}

function switchBackground(mode) {
	console.log("switchBackground " + mode + " / " + SITE_MODE);

	if (mode != SITE_MODE) {
		console.log("Backgrounds can be changed only for current (" + SITE_MODE + ") site mode");
		return;
	}


	if (streamOverride){
		var bg = 0;
		console.log(backs['stream'].backs[0]);
		if (mode == 'evening') bg = 1;
		else if (mode == 'midnight') bg = 2;
		else if (mode == 'night') bg = 3;

		coverImage.css({'background-image': 'url(' + backs['stream'].backs[bg] + ')'});
		return;
	}

	var currentModeAssets = backs[SITE_MODE],
		backsCount = currentModeAssets.backs.length,
		nextIndex = 0;

	currentIndex++;

	if (currentIndex > backsCount - 1)
		currentIndex = 0;

	nextIndex = currentIndex + 1;
	if (nextIndex > backsCount - 1)
		nextIndex = 0;
	

	if (isMobileMode())
		coverImage.css({'background-image': 'url(' + currentModeAssets.backs_mobile[currentIndex] + ')'});
	else
		coverImage.css({'background-image': 'url(' + currentModeAssets.backs[currentIndex] + ')'});

	switchFrame();
}

function switchFrame() {	
	frameIndex++;
	if (frameIndex > framesCount)
		frameIndex = 1;

	frameMobileMode = isMobileMode();

	if (!frameMobileMode)
		frameOverlay.css({'background-image': 'url(/assets/sprites/frame' + frameIndex + '.png)'});
	else
		frameOverlay.css({'background-image': 'url(/assets/sprites/frame' + frameIndex + 'm.png)'});
}

function switchCurrentBackground() {
	sfxPlaySlide();
	switchBackground(SITE_MODE);

	if (isMobileMode())
		hideLeftPanels();
}


function toggleLinks(){	
	if (linksIsEnabled){
		disableLinks();
		sfxPlaySlide();
	}
	else{
		enableLinks();
		sfxPlayClick();
	}

	toggleFrame();
}
function enableLinks(){
	if (linksIsEnabled) return;
	linksIsEnabled = true;

	togglePlayer(); //for mobile

	enableBright();
	disableAir();


	if (isMobileMode())
	{
		links.show();
		links.css({left: '0', opacity: '1'});
		activeLinks.show();
		activeLinks.css({opacity: '1'});
		volumeSpeaker.hide();
		volumeContainer.hide();
		return;
	}

	links.show();
	links.animate({
		left: '0',
		opacity: '1'
	}, 300);

	activeLinks.show();
	activeLinks.animate({
		opacity: '1'
	}, 300);
}
function disableLinks(){
	if (!linksIsEnabled) return;
	linksIsEnabled = false;

	togglePlayer(); //for mobile

	if (!airIsEnabled)
		disableBright();

	if (isMobileMode())
	{
		links.hide();
		activeLinks.hide();
		volumeSpeaker.show();
		volumeContainer.show();
		return;
	}

	links.animate({
		left: '-150',
		opacity: '0'
	}, 300, function(){links.hide();});

	activeLinks.animate({
		opacity: '0'
	}, 300, function(){activeLinks.hide();});
}

function toggleAirPanel(){
	if (airIsEnabled){	
		disableAir();
		sfxPlaySlide();
	}
	else{
		enableAir();
		sfxPlayClick();
	}

	toggleFrame();
}

function toggleFrame(){
	if (linksIsEnabled || airIsEnabled)
		frameOverlay.animate({
			left: '-30px',
			right: '-30px',
			top: '-30px',
			bottom: '69px'
		}, 600);
	else
		frameOverlay.animate({
			left: '0px',
			right: '0px',
			top: '0px',
			bottom: '69px'
		}, 400);
}

function enableAir(){
	if (airIsEnabled) return;
	airIsEnabled = true;

	togglePlayer(); //for mobile

	enableBright();
	disableLinks();

	if (isMobileMode())
	{
		air.show();
		air.css({left: '0', opacity: '1'});
		activeAir.show();
		activeAir.css({opacity: '1'});
		
		volumeSpeaker.hide();
		volumeContainer.hide();
		return;
	}

	air.show();
	air.animate({
		left: '0',
		opacity: '1'
	}, 300);

	activeAir.show();
	activeAir.animate({
		opacity: '1'
	}, 300);
}
function disableAir(){
	if (!airIsEnabled) return;
	airIsEnabled = false;

	togglePlayer(); //for mobile

	if (!linksIsEnabled)
		disableBright();

	if (isMobileMode())
	{
		air.hide();
		activeAir.hide();
		volumeSpeaker.show();
		volumeContainer.show();
		return;
	}

	air.animate({
		left: '-150',
		opacity: '0'
	}, 300, function(){air.hide();});
	

	activeAir.animate({
		opacity: '0'
	}, 300, function(){activeAir.hide();});	
}

function toggleBright(){
	if (brightIsEnabled)		
		disableBright()
	else
		enableBright;
}
function enableBright(){
	if (brightIsEnabled) return;
	brightIsEnabled = true;

	if (isMobileMode())
		return;

	bright.show();
	bright.animate({
		opacity: '0.2',
	}, 300);
}
function disableBright(){
	if (!brightIsEnabled) return;
	brightIsEnabled = false;

	bright.animate({
		opacity: '0',
	}, 300, function(){bright.hide();});
}

function hideLeftPanels() {
	if (!linksIsEnabled && !airIsEnabled)
		return;

	disableBright();
	disableAir();
	disableLinks();

	sfxPlaySlide();
	toggleFrame();
}

function sfxPlayClick() {
	if (isMobileMode()) return;

	//sfxClick.playbackRate = 0.9 + Math.random(0.2);	
	sfxClick.volume = Math.max(0, volumeValue - 0.3);
	sfxClick.play();
}

function sfxPlaySlide() {
	if (isMobileMode()) return;

	//sfxSlide.playbackRate = 0.7 + Math.random(0.3);
	sfxSlide.volume = Math.max(0, volumeValue - 0.1);
	sfxSlide.play();
}

function toggleNavi() {
	disableBright();
	disableAir();
	disableLinks();

	togglePlayer(); //for mobile

	naviIsEnabled = !naviIsEnabled;

	var durationShow = 350;
	var durationHide = 450;

	

	if (!naviIsEnabled) {
		sfxPlaySlide();

		navi.animate({
			opacity: '0',
			bottom: '-170px'
		  }, durationHide);
		

		frameOverlay.animate({
			opacity: '0',
			left: '-100px',
			right: '-100px',
			top: '-100px',
			bottom: '-100px'
		  }, durationHide);

		coverImage.animate({
			left: '0px',
			right: '0px',
			top: '0px',
			bottom: '0px'
		  }, durationHide);	

		logo.animate({
			bottom: '25px'
		  }, durationHide * 0.15);

		logo.find('img').animate({
			height: '75px'
		  }, durationHide);

		//coverImage.animate({'background-size': 'cover 100%'}, durationHide);

	} else {
		sfxPlayClick();
		switchFrame();
		
		navi.animate({
			opacity: '1',
			bottom: '0px'
		  }, durationShow);
	
		frameOverlay.animate({
			opacity: '1',
			left: '0px',
			right: '0px',
			top: '0px',
			bottom: '69px'
		  }, durationShow);		

		coverImage.animate({
			left: '-30px',
			right: '-30px',
			top: '-30px',
			bottom: '-30px'
		  }, durationShow);

		logo.animate({
			bottom: '5px'
		  }, durationShow);

		logo.find('img').animate({
			height: '60px'
		  }, durationShow);

		//coverImage.animate({'background-size': 'cover 105%'}, durationShow);
	}	
}


function togglePlayer() {
	if (isMobileMode()) {
		if (linksIsEnabled || airIsEnabled) {
			player.hide();
		} else {
			player.show();
		}
	} else
		player.show();
}


$(document).ready(init);
