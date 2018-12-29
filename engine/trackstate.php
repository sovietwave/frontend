<?php

function getCurrentTrackType() {
	$track = file_get_contents('/var/run/liquidsoap/soviet.track');
	$pathcomponents = explode('/', trim($track));

	error_log(print_r($pathcomponents, true));

	return ($pathcomponents[7]);
}