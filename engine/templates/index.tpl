<!DOCTYPE html>


<html lang="ru">
    <head>
        <meta name="viewport" content="initial-scale=1.0">
		<meta charset="utf-8">

		<meta name="description" content="Современная отечественная музыка, вдохновлённая мечтами из прошлого.">
		<meta name="keywords" content="радио, ссср, советское, советская волна, советвейв, советвэйв,
        radio, sovietwave, chillwave, retrowave, dreamwave, dreampop, weedwave, indie, ussr, soviet union">

		<link rel="stylesheet" href="/assets/styles/fonts.css?v<?php echo CLIENT_VERSION; ?>">
		<link rel="stylesheet" href="/assets/styles/rangeinput.css?v<?php echo CLIENT_VERSION; ?>">
		<link rel="stylesheet" href="/assets/styles/soviet.css?v<?php echo CLIENT_VERSION; ?>">
		<link rel="stylesheet" href="/assets/styles/navi.css?v<?php echo CLIENT_VERSION; ?>">

		<link rel="apple-touch-icon" sizes="180x180" href="/assets/sprites/favicons/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/assets/sprites/favicons/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/sprites/favicons/favicon-16x16.png">
		<link rel="manifest" href="/site.webmanifest">

		<meta property="og:image" content="/assets/sprites/favicons/social.jpg">
		<meta name="mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-title" content="Советская Волна">
		<meta name="application-name" content="Советская Волна">
		<meta name="msapplication-TileColor" content="#da532c">
		<meta name="theme-color" content="#ffffff">


		<script src="//static.nay.su/js/jquery.js" type="text/javascript"></script>
		<script src="//static.nay.su/js/util.js" type="text/javascript"></script>

		<script src="/assets/js/volume.js" type="text/javascript"></script>
		<script src="/assets/js/radio.js?v<?php echo CLIENT_VERSION; ?>" type="text/javascript"></script>
		<script src="/assets/js/core.js?v<?php echo CLIENT_VERSION; ?>" type="text/javascript"></script>
		
		<title>Радио &laquo;Советская Волна&raquo;</title>
    </head>

    <body>
        <script type="text/javascript">
            var SITE_MODE = '{$site_mode}';
        </script>
        
        <div id="cover-image"></div>
		<div id="bright-overlay" onclick="hideLeftPanels()"></div> 
		<div id="frame-overlay"></div> 

		{include file='engine/templates/content/player.tpl'}
		{include file='engine/templates/menus.tpl'}
		{include file='engine/templates/navi.tpl'}

		<div id="panel-active-air"></div>

    </body>
</html>