const volume = $("#volume-range");


volume.on('input', function() {
    audio.volume = volume.val() / 100;
});
