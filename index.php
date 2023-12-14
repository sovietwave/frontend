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
define ('CLIENT_VERSION', 53);

// Set me to true when the site works in a special (event) mode
define ('EVENT_OVERRIDE', false);

function console_log($data){
    if(is_array($data) || is_object($data)){
		echo("<script>console.log('PHP: ".json_encode($data)."');</script>");
	} else {
		echo("<script>console.log('PHP: ".$data."');</script>");
	}
}

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

		case 'stream':
			die('stream');
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
$site_mode = '';

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

			case 'stream':
				$site_mode = 'stream';
				break;

			default:
				$site_mode = 'night';
				break;
		}
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

	if ($site_mode == 'stream'){
		$smarty->display('stream/stream.htm');
	}
	else{
		$smarty->display('engine/templates/index.tpl');
	}

	die();
}