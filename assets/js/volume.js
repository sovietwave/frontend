$(document).ready(function() {
    volume_slider = $("#volume-range");

    volume_slider.on("input", function() {
        if (playerReady) {
            radioPlayer.volume = volume_slider.val() / 100;
        }
    });
});

function radioGetVolume() {
	// var savedVol = getVal('volume');
	var savedVol = 1;

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