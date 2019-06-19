var localStorageAvailable = false,
	siteModeOverridden = true,
	currentIndex = 0;

var backs =
{
	"day": {
		"backs": [
			"/assets/sprites/day0.jpg",
			"/assets/sprites/day1.jpg",
			"/assets/sprites/day2.jpg"
		],

		"buttons": [
			"/assets/sprites/btn-day0.png",
			"/assets/sprites/btn-day1.png",
			"/assets/sprites/btn-day2.png"
		]
	},

	"evening": {
		"backs": [
			"/assets/sprites/evening0.jpg",
			"/assets/sprites/evening1.jpg",
			"/assets/sprites/evening2.jpg"
		],

		"buttons": [
			"/assets/sprites/btn-evening0.png",
			"/assets/sprites/btn-evening1.png",
			"/assets/sprites/btn-evening2.png"
		]
	},

	"night": {
		"backs": [
			"/assets/sprites/night0.jpg",
			"/assets/sprites/night1.jpg",
			"/assets/sprites/night2.jpg"
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

function init() {
	localStorageAvailable = isLSAvailable();

	$('#volume').rangeslider({
		polyfill: false,

		// Callback function
		onInit: function () { radioInit(); },

		// Callback function
		onSlide: function (position, value) { if (radioPlayer) radioPlayer.volume = (value / 100); },

		// Callback function
		onSlideEnd: function (position, value) { radioSetVolume(value, true); }
	});

	// Randomize fist pic
	currentIndex = rnd(0, backs[SITE_MODE].backs.length);

	setTheme(SITE_MODE);

	if (SITE_MODE != 'event' || !siteModeOverridden)
		setInterval(function () {
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
			}
			else if (t >= 7 && t < 19) // day
			{
				if (SITE_MODE != 'day') {
					SITE_MODE = 'day';
					setTheme('day');
				}
			}
			else // evening
			{
				if (SITE_MODE != 'evening') {
					SITE_MODE = 'evening';
					setTheme('evening');
				}
			}
		}, 30000); // check every 30s

	$(window).click(function () {
		var linksElement = $("#panel");
		if (linksElement) {
			linksElement.hide();
		}
	});

	$('#panel').click(function (event) {
		event.stopPropagation();
	});
}

function error(tx) {
	alert(tx);
}


function mkactive(name) {
	$('.menu-item').removeClass('active');
	$('#menu-item-' + name).addClass('active');
}

function resetEvents() {
	$(document).off();
	$(window).off();
}

function loadContent(name) {
	resetEvents();
	$.ajax({ url: '/' + name + '?ajax', }).done(function (c) { showContent(name, c); }).fail(function (jq, jx) { error('ERR: ' + jx); });
	return false;
}

function showContent(name, content) {
	history.pushState(null, null, name);

	if (typeof saria_disconnect == 'function')
		saria_disconnect();

	mkactive(name);

	$('#content').html(content);
}


function setTheme(mode) {
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

			$('body').css({ 'background-color': '#202020' });
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

			$('body').css({ 'background-color': '#202020' });
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

			$('body').css({ 'background-color': '#5fb0e8' });
			break;

		default:
			console.warn('Bad theme requested: ' + mode);
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

	$('body').css({ 'background-image': 'url(' + currentModeAssets.backs[currentIndex] + ')' });
	$('#navi-button-' + SITE_MODE).css({ 'background-image': 'url(' + currentModeAssets.buttons[nextIndex] + ')' });
}


// yeah there could be more elegant solution
// PRs are welcome ;3
function toggleLinks() {
	if ($("#panel").is(':visible')) {
		$("#panel").hide();
	} else {
		$("#air-panel").hide();
		$("#panel").show();
	}
}

function toggleAirPanel() {
	if ($("#air-panel").is(':visible')) {
		$("#air-panel").hide();
	} else {
		$("#panel").hide();
		$("#air-panel").show();
	}
}

$(document).ready(init);