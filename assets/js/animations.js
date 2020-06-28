var ANIMATION_SPEED = 300;

function toggleNavi() {
	var navi = $('#navi'),
		logo = $('#navi-logo');

	if ($("#links-panel").is(':visible') || $("#air-panel").is(':visible')) {
		hidePanels();
		logo.show();
	} else {
		if (navi.is(':visible')) {
			navi.animate({
				opacity: '0',
			  }, ANIMATION_SPEED);
			navi.hide();

			logo.find('img').animate({
				height: '100',
			  }, ANIMATION_SPEED);
		} else {
			navi.animate({
				opacity: '1',
			  }, ANIMATION_SPEED);
			navi.show();	

			logo.find('img').animate({
				height: '60',
			  }, ANIMATION_SPEED);
		}
	}
}

function hidePanels() {
	$("#air-panel").hide();
	$("#links-panel").hide();
	$('#bright-overlay').hide();

	$('#panel-active-links').hide();
	$('#panel-active-air').hide();
}

function toggleMenu(panelId) {
	var panels = [$("#links-panel"),  $("#air-panel")],
		panel = $(panelId),
		brightOverlay = $('#bright-overlay'),
		player = $("#player-wrapper");

	if (panel.is(':visible')) {
		panel.animate({
			left: '-450',
		}, ANIMATION_SPEED, function() {
			$(this).hide();
		});

		brightOverlay.animate({
			opacity: '0',
		  }, ANIMATION_SPEED);
		
		player.animate({
			opacity: '1',
		}, ANIMATION_SPEED);
	} else {
		// hide all panels
		for (panelIndex=0; panelIndex < panels.length; panelIndex++) {
			panel_to_close = panels[panelIndex];
			
			if (panel_to_close[0].id != panel[0].id) {
				panel_to_close.animate({
					left: '-450',
				}, ANIMATION_SPEED, function() {
					$(this).hide();
				});
			}
		}

		panel.animate({
			left: '0',
		}, ANIMATION_SPEED).show();
		
		brightOverlay.show();
		brightOverlay.animate({
			opacity: '0.2',
		}, ANIMATION_SPEED);

		player.animate({
			opacity: '0',
		}, ANIMATION_SPEED);
	}
}
