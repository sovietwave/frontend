var localStorageAvailable = false,
	siteModeOverridden = true,
	currentIndex = 0;
	frameIndex = 0;
	framesCount = 3;
	
var backs = {
	"day": {
		"backs": [
			"/assets/sprites/bg/day1.jpg",
			"/assets/sprites/bg/day2.jpg",
			"/assets/sprites/bg/day3.jpg"
		],

		"backs_mobile": [
			"/assets/sprites/bg/mobile/day1.jpg",
			"/assets/sprites/bg/mobile/day2.jpg",
			"/assets/sprites/bg/mobile/day3.jpg"
		]
	},

	"evening": {
		"backs": [
			"/assets/sprites/bg/evening1.jpg",
			"/assets/sprites/bg/evening2.jpg",
			"/assets/sprites/bg/evening3.jpg"
		],

		"backs_mobile": [
			"/assets/sprites/bg/mobile/evening1.jpg",
			"/assets/sprites/bg/mobile/evening2.jpg",
			"/assets/sprites/bg/mobile/evening3.jpg"
		]
	},

	"night": {
		"backs": [
			"/assets/sprites/bg/night1.jpg",
			"/assets/sprites/bg/night2.jpg",
			"/assets/sprites/bg/night3.jpg"
		],

		"backs_mobile": [
			"/assets/sprites/bg/mobile/night1.jpg",
			"/assets/sprites/bg/mobile/night2.jpg",
			"/assets/sprites/bg/mobile/night3.jpg"
		]
	},

	"midnight": {
		"backs": [
			"/assets/sprites/bg/midnight1.jpg",
			"/assets/sprites/bg/midnight2.jpg"
		],

		"backs_mobile": [
			"/assets/sprites/bg/mobile/midnight1.jpg",
			"/assets/sprites/bg/mobile/midnight2.jpg"
		]
	},

	"event": {
		"backs": [
			"/assets/sprites/bg/event.jpg"
		],

		"backs_mobile": [
			"/assets/sprites/bg/mobile/event.jpg"
		]
	}
};

var modes = {
	"day": {
		"title": "Дневной эфир",
		"subtitle": "#chillwave #dreamwave #sovietwave",
		"start": "7:00",
		"finish": "19:00",
		"times": "7:00 — 19:00"
	},

	"evening": {
		"title": "Вечерний эфир",
		"subtitle": "#synthpop #postpunk #sovietwave",
		"start": "19:00",
		"finish": "0:00",
		"times": "19:00 — 0:00"
	},

	"night": {
		"title": "Ночной эфир",
		"subtitle": "#ambient #experimental #sovietwave",
		"start": "0:00",
		"finish": "7:00",
		"times": "0:00 — 7:00"
	},

	"midnight": {
		"title": "Полуночный эфир",
		"subtitle": "#etherial #ambientpop #sovietwave",
		"start": "0:00",
		"finish": "7:00",
		"times": "0:00 — 7:00"
	},

	"event1_space": {
		"title": "День Космонавтики",
		"subtitle": "#sovietwave",
		"start": "12 апреля",
		"finish": "14 апреля",
		"times": "12 апреля"
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

function isMobileMode()
{
	return document.documentElement.scrollWidth < 1100;
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
	
 	sfxSlide = new Audio('../assets/sfx/slide.ogg');
 	sfxClick = new Audio('../assets/sfx/click.ogg');
	// Randomize fist pic
	currentIndex = rnd(0, backs[SITE_MODE].backs.length);
	frameIndex = rnd(0, framesCount);

	setTheme(SITE_MODE);

	if (SITE_MODE != 'event' || !siteModeOverridden)
		setInterval(function() {
			if (siteModeOverridden)
				return;

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
			} else if (      (t >= 23 && m >= 20)       ||         t <= 1) // midnight
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
		}, 30000); // check every 30s
}

function setTheme(mode) {

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
	if (mode != SITE_MODE) {
		console.log("Backgrounds can be changed only for current (" + SITE_MODE + ") site mode");
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
			left: '-25px',
			right: '-25px',
			top: '-25px',
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
	disableBright();
	disableAir();
	disableLinks();

	sfxPlaySlide();
	toggleFrame();
}

function sfxPlayClick() {
	if (isMobileMode()) return;

	//sfxClick.playbackRate = 0.9 + Math.random(0.2);	
	sfxClick.volume = volumeValue - 0.3;
	sfxClick.play();
}

function sfxPlaySlide() {
	if (isMobileMode()) return;

	//sfxSlide.playbackRate = 0.7 + Math.random(0.3);
	sfxSlide.volume = volumeValue - 0.1;
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
		  }, durationShow);	

		logo.find('img').animate({
			height: '70',
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
		  }, durationHide);

		logo.find('img').animate({
			height: '60',
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
