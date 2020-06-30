var localStorageAvailable = false,
	siteModeOverridden = true,
	currentIndex = 0;

var backs = {
	"day": {
		"backs": [
			"/assets/sprites/day0.jpg",
			"/assets/sprites/day1.jpg",
			"/assets/sprites/day2.jpg",
			"/assets/sprites/day3.jpg",
			"/assets/sprites/day4.jpg",
			"/assets/sprites/day5.jpg"
		],

		"buttons": [
			"/assets/sprites/btn-day0.png",
			"/assets/sprites/btn-day1.png",
			"/assets/sprites/btn-day2.png",
			"/assets/sprites/day6.png",
		]
	},

	"evening": {
		"backs": [
			"/assets/sprites/evening0.jpg",
			"/assets/sprites/evening1.jpg",
			"/assets/sprites/evening2.jpg",
			"/assets/sprites/evening3.jpg",
			"/assets/sprites/evening4.jpg",
			"/assets/sprites/evening5.jpg",
			"/assets/sprites/evening6.png",
			"/assets/sprites/evening7.png",
		],

		"buttons": [
			"/assets/sprites/btn-evening0.png",
			"/assets/sprites/btn-evening1.png",
			"/assets/sprites/btn-evening2.png",
			"/assets/sprites/btn-evening3.png",
			"/assets/sprites/btn-evening4.png"
			
		]
	},

	"night": {
		"backs": [
			"/assets/sprites/night0.jpg",
			"/assets/sprites/night1.jpg",
			"/assets/sprites/night2.jpg",
			"/assets/sprites/night3.jpg",
			"/assets/sprites/night4.jpg",
			"/assets/sprites/night5.jpg",
			"/assets/sprites/night7.png",
		],

		"buttons": [
			"/assets/sprites/btn-night0.png",
			"/assets/sprites/btn-night1.png",
			"/assets/sprites/btn-night2.png"
		]
	},

	"event": {
		"backs": [
			"/assets/sprites/event0.jpg"
		],

		"buttons": [] // no buttons for event
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

function init() {
	localStorageAvailable = isLSAvailable();

	// Randomize fist pic
	currentIndex = rnd(0, backs[SITE_MODE].backs.length);

	setTheme(SITE_MODE);

	if (SITE_MODE != 'event' || !siteModeOverridden)
		setInterval(function() {
			if (siteModeOverridden)
				return;

			var
				d = new Date(),
				nd = new Date(d.getTime() + (10800000)), // 3600000 * 3 (3 - MSK, UTC+3)
				t = nd.getUTCHours();

			if (t >= 0 && t < 7) // night
			{
				if (SITE_MODE != 'night') {
					SITE_MODE = 'night';
					setTheme('night');
				}
			} else if (t >= 7 && t < 19) // day
			{
				if (SITE_MODE != 'day') {
					SITE_MODE = 'day';
					setTheme('day');
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

	switch (mode) {
		case 'night':
			$('#navi-logo').attr('class', 'night');
			$('main').attr('class', 'night');
			$('main a').attr('class', 'night');

			$('.navi-button').removeClass('day');
			$('.navi-button').removeClass('evening');
			$('.navi-button').addClass('night');

			$('.navi-button').removeClass('enlarged');
			$('#navi-button-night').addClass('enlarged');

			$('.dev-info').removeClass('day');
			$('.dev-info').removeClass('evening');
			$('.dev-info').addClass('night');

			$('.rangeslider__fill').removeClass('day');
			$('.rangeslider__fill').removeClass('evening');
			$('.rangeslider__fill').addClass('night');

			$('body').css({
				'background-color': '#202020'
			});
			break;

		case 'evening':
			$('#navi-logo').attr('class', 'evening');
			$('main').attr('class', 'evening');
			$('main a').attr('class', 'evening');

			$('.navi-button').removeClass('day');
			$('.navi-button').removeClass('night');
			$('.navi-button').addClass('evening');

			$('.navi-button').removeClass('enlarged');
			$('#navi-button-evening').addClass('enlarged');

			$('.dev-info').removeClass('day');
			$('.dev-info').removeClass('night');
			$('.dev-info').addClass('evening');

			$('.rangeslider__fill').removeClass('day');
			$('.rangeslider__fill').removeClass('night');
			$('.rangeslider__fill').addClass('evening');

			$('body').css({
				'background-color': '#202020'
			});
			break;

		case 'day':
			$('#navi-logo').attr('class', 'day');
			$('main').attr('class', 'day');
			$('main a').attr('class', 'day');

			$('.navi-button').removeClass('night');
			$('.navi-button').removeClass('evening');
			$('.navi-button').addClass('day');

			$('.navi-button').removeClass('enlarged');
			$('#navi-button-day').addClass('enlarged');

			$('.dev-info').removeClass('night');
			$('.dev-info').removeClass('evening');
			$('.dev-info').addClass('day');

			$('.rangeslider__fill').removeClass('night');
			$('.rangeslider__fill').removeClass('evening');
			$('.rangeslider__fill').addClass('day');

			$('body').css({
				'background-color': '#5fb0e8'
			});
			break;

		default:
			console.warn('Unknown color theme requested: ' + mode);
			break;
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

	$('body').css({
		'background-image': 'url(' + currentModeAssets.backs[currentIndex] + ')'
	});
	$('#navi-button-' + SITE_MODE).css({
		'background-image': 'url(' + currentModeAssets.buttons[nextIndex] + ')'
	});
}

function switchCurrentBackground() {
	switchBackground(SITE_MODE);
}

$(document).ready(init);
