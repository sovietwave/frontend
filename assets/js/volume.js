class VolumeHandler {
	constructor(defaultVolumeValue, volumeTogglerId, volumeSliderId, radioPlayer) {
		this.DEFAULT_VOLUME_VALUE = defaultVolumeValue;
		this.volumeToggler = $(volumeTogglerId);
		this.volumeSlider = $(volumeSliderId);
		this.radioPlayer = radioPlayer;
		
		var this_ = this
		this.volumeToggler.click(function() {
			this_.toggleVolume();
		});

		this.volumeSlider.on("input", function() {
			if (playerReady) {
				this.radioPlayer.volume = this.value / 100;
			}

			if (this.radioPlayer.volume != 0) {
				this_.volumeToggler.attr("src", "/assets/sprites/icons/volume.png");
			} else {
				this_.volumeToggler.attr("src", "/assets/sprites/icons/mute.png");
			}
		});
		this.volumeSlider.val(this.DEFAULT_VOLUME_VALUE * 100);

		this.radioPlayer.volume = this.DEFAULT_VOLUME_VALUE;

		this.lastVolumeValue = this.DEFAULT_VOLUME_VALUE;
	}

	toggleVolume(){
		if (this.radioPlayer.volume != 0) {
			// mute

			this.lastVolumeValue = this.volumeSlider.val() / 100;
			this.radioPlayer.volume = 0;
			this.volumeSlider.val(0.);
			this.volumeToggler.attr("src", "/assets/sprites/icons/mute.png");
		} else {
			// unmute

			this.radioPlayer.volume = this.lastVolumeValue;
			this.volumeSlider.val(this.radioPlayer.volume * 100);
			this.volumeToggler.attr("src", "/assets/sprites/icons/volume.png");
		}
	}
}
