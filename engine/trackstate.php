<?php

function getCurrentTrackType() {
	$track = file_get_contents('/var/run/liquidsoap/soviet.track');
	$pathcomponents = explode('/', trim($track));
	
	return ($pathcomponents[7]);
}