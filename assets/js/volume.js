

class Volume {
	constructor() {
		var DEFAULT_VOLUME_VALUE = 0.75;
		var self = this;

		this.speakerLogo = $("#volume-speaker-logo");
		this.speakerLogo.click(function() {
			self.toggleVolume();
		});

		this.slider = $("#volume-range");
		this.slider.on("input", function() {
			if (playerReady) {
				radioPlayer.volume = this.value / 100;
				volumeValue = this.value / 100;
			}

			if (radioPlayer.volume != 0) {
				self.speakerLogo.attr("src", "/assets/sprites/icons/volume.png");
			} else {
				self.speakerLogo.attr("src", "/assets/sprites/icons/mute.png");
			}
		});
		this.slider.val(DEFAULT_VOLUME_VALUE * 100);

		radioPlayer.volume = DEFAULT_VOLUME_VALUE;

		this.lastVolumeValue = DEFAULT_VOLUME_VALUE;
	}

	toggleVolume(){
		if (radioPlayer.volume != 0) {
			// mute

			this.lastVolumeValue = this.slider.val() / 100;
			radioPlayer.volume = 0;
			volumeValue = 0;
			this.slider.val(0.);
			this.speakerLogo.attr("src", "/assets/sprites/icons/mute.png");
		} else {
			// unmute

			radioPlayer.volume = this.lastVolumeValue;
			volumeValue = this.lastVolumeValue;
			this.slider.val(radioPlayer.volume * 100);
			this.speakerLogo.attr("src", "/assets/sprites/icons/volume.png");
		}
	}
}
