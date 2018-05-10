<?php

function get_template ($mode)
{
	switch ($mode)
	{
		case 'index' :
			return 'index.tpl'; break;
			
		default :
			header ('HTTP/1.1 404 Not Found');
			return '404.tpl';
			break;
	}
}

function get_title($mode)
{
	switch ($mode)
	{
		case 'index' :
			return 'Главная'; break;
			
		default :
			return '404';
			break;
	}
}