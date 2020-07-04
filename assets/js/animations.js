const ANIMATION_SPEED = 300;
var activePanel = null;


function hideSmooth(element, property, speed=ANIMATION_SPEED) {
	element.animate(
		property,
		speed,
		function() {
			$(this).hide();
		}
	);
}

function showSmooth(element, property, speed=ANIMATION_SPEED) {
	element.animate(property, speed).show();
}

function toggleNavi() {
	var navi = $('#navi'),
		logo = $('#navi-logo');

	if ($("#links-panel").is(':visible') || $("#air-panel").is(':visible')) {
		logo.show();
	} else {
		if (navi.is(':visible')) {
			navi.hide();

			logo.find('img').animate({
				height: '100',
			  }, ANIMATION_SPEED);
		} else {
			showSmooth(navi, {opacity: "1"});

			logo.find('img').animate({
				height: '60',
			  }, ANIMATION_SPEED);
		}
	}
}

function togglePanel(togglerId, panelId) {
	const panels = [$("#links-panel"),  $("#air-panel")];
	var panel = $(panelId),
		brightOverlay = $('#bright-overlay'),
		panelTogglers = $(".panel-toggler"),
		toggler = $("#" + togglerId);

	activePanel = panel;

	if (panel.is(':visible')) {
		hideSmooth(panel, {left: "-450"});
		hideSmooth(brightOverlay, {opacity: "0"});
		panelTogglers.css("background-color", "rgb(0, 0, 0, 0)");
		toggler.css("background-color", "rgb(0, 0, 0, 0)");
	} else {
		// hide all panels
		for (panelIndex=0; panelIndex < panels.length; panelIndex++) {
			panel_to_close = panels[panelIndex];
			
			if (panel_to_close[0].id != panel[0].id) {
				hideSmooth(panel_to_close, {left: "-450"});
			}
		}

		panelTogglers.css("background-color", "rgb(0, 0, 0, 0)");
		toggler.css("background-color", "rgb(225, 222, 128, 0.5)");

		showSmooth(panel, {left: "0"});
		showSmooth(brightOverlay, {opacity: "0.2"});
	}
}

function hidePanels() {
	hideSmooth(activePanel, {left: "-450"});
	hideSmooth($('#bright-overlay'), {opacity: "0"});
	$(".panel-toggler").css("background-color", "rgb(0, 0, 0, 0)");
}
