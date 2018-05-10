<?php

$json = json_decode(file_get_contents('content/links'), true);

foreach ($json as $k => $a)
{
	$json[$k]['artist'] = mb_strtolower($a['artist'], 'UTF-8');
}

$s = 'var artists = '.json_encode($json).';';

file_put_contents('content/links.json', $s);
