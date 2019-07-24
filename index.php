<?php
require_once ('engine/content.php');
require_once ('engine/trackstate.php');

// Change me when css/js is changed
define ('CLIENT_VERSION', 28);

// Set me to true when the site works in a special (event) mode
define ('EVENT_OVERRIDE', false);



$route = explode('/', $_GET['route']);

if (empty(trim($route[0])))
{
	$route[0] = 'index';
}

if ($route[0] === 'tracktype') {
	$trackType = getCurrentTrackType();

	header ('Content-Type: text/plain');
	switch ($trackType) {
		case 'night':
			die('night');
			break;

		case 'day':
			die('day');
			break;

		case 'evening':
			die('evening');
			break;
		
		default:
			die('evening');
			break;
	}
}

$content_template = get_template ($route[0]);
$page_title = get_title($route[0]);


$nowtime = (int)date('G');
$site_mode = 'night';


if (EVENT_OVERRIDE)
	$site_mode = 'event';
else
{
	if (!empty($_GET['mode']))
	{
		switch ($_GET['mode'])
		{
			case 'day':
				$site_mode = 'day';
				break;
			
			case 'night':
				$site_mode = 'night';
				break;

			case 'evening':
				$site_mode = 'evening';
				break;

			default:
				$site_mode = 'night';
				break;
		}
	}
	else
	{
		if ($nowtime >= 0 && $nowtime < 7)
			$site_mode = 'night';
		else if ($nowtime >= 7 && $nowtime < 19)
			$site_mode = 'day';
		else
			$site_mode = 'evening'; 

		/*$currentTrackType = getCurrentTrackType();
		switch ($currentTrackType) {
			case 'night':
				$site_mode = 'night';
				break;

			case 'day':
				$site_mode = 'day';
				break;

			case 'evening':
				$site_mode = 'evening';
				break;
			
			default:
				$site_mode = 'evening';
				break;
		}*/
	}
}

$bg_color  = ($site_mode == 'day') ? '5fb0e8' : '202020';

if (isset($_GET['ajax']))
{
	include_once ('engine/content/'.$content_template);
	include_once ('engine/title_set.tpl');
	die();
}
else
{
	$content['site_mode'] = $site_mode;
	$content['background_mode'] = $site_mode;
	$content['background_color'] = $bg_color;
	$content['title'] = $page_title.' &ndash; Советская волна';
	$content['logo'] = '#sovietwave';
	
	include_once ('engine/header.tpl');
	include_once ('engine/content/'.$content_template);
	include_once ('engine/footer.tpl');
	die();
}