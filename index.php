<?php
require_once ('engine/content.php');
require_once ('engine/trackstate.php');
require_once ('engine/libs/Smarty.class.php');

$smarty = new Smarty();

$smarty->setTemplateDir('engine/templates');
$smarty->setCompileDir('engine/templates_c');
$smarty->setCacheDir('engine/cache');
$smarty->setConfigDir('engine/configs');

// Change me when css/js is changed
define ('CLIENT_VERSION', 32);

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

		case 'midnight':
			die('midnight');
			break;
		
		default:
			die('evening');
			break;
	}
}

// FIX IT !!!!!!!!
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

			case 'midnight':
				$site_mode = 'midnight';
				break;

			default:
				$site_mode = 'night';
				break;
		}
	}
	else
	{
		$site_mode = 'evening';

		if ($nowtime >= 0 && $nowtime < 1)
			$site_mode = 'midnight';

		if ($nowtime >= 1 && $nowtime < 7)
			$site_mode = 'night';

		if ($nowtime >= 7 && $nowtime < 19)
			$site_mode = 'day';


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

//$bg_color  = ($site_mode == 'day') ? '5fb0e8' : '202020';
$bg_color = '000000';

if (isset($_GET['ajax']))
{
	include_once ('engine/content/'.$content_template);
	// include_once ('engine/title_set.tpl');
	die();
}
else
{
	// $content['site_mode'] = $site_mode;
	// $content['background_mode'] = $site_mode;
	// $content['background_color'] = $bg_color;
	// $content['title'] = $page_title.' &ndash; Советская волна';
	// $content['logo'] = '#sovietwave';

	$smarty->assign('site_mode', $site_mode);
	$smarty->assign('content_template', $content_template);
	$smarty->assign('background_mode', $site_mode);
	$smarty->assign('background_color', $bg_color);
	$smarty->assign('title', $page_title.' &ndash; Советская волна');
	$smarty->assign('logo', '#sovietwave');

	$smarty->display('engine/templates/index.tpl');

	die();
}