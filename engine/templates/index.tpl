<!DOCTYPE html>


<html lang="ru">
    <head>
        <meta name="viewport" content="initial-scale=1.0">
		<meta charset="utf-8">

		<meta name="description" content="Современная отечественная музыка, мечтающая о прошлом.">
		<meta name="keywords" content="радио, ссср, советское, советская волна, советвейв, советвэйв,
        radio, sovietwave, chillwave, retrowave, dreamwave, dreampop, weedwave, indie, ussr, soviet union">

		<meta property="og:image" content="https://<?php echo($_SERVER['HTTP_HOST']); ?>/assets/sprites/social.jpg">
		<meta name="mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-title" content="Советская волна">
		<meta name="application-name" content="Советская волна">

		<link rel="stylesheet" href="assets/styles/fonts.css?v<?php echo CLIENT_VERSION; ?>">
		<link rel="stylesheet" href="assets/styles/rangeinput.css?v<?php echo CLIENT_VERSION; ?>">
		<link rel="stylesheet" href="assets/styles/soviet.css?v<?php echo CLIENT_VERSION; ?>">
		<link rel="stylesheet" href="assets/styles/navi.css?v<?php echo CLIENT_VERSION; ?>">

		<link rel="apple-touch-icon" href="/assets/sprites/icon-apple.png">
		<link rel="apple-touch-icon-precomposed" sizes="128x128" href="/assets/sprites/icon-apple.png">
		<link rel="shortcut icon" sizes="128x128" href="/assets/sprites/icon-android.png">

		<script src="//static.nay.su/js/jquery.js" type="text/javascript"></script>
		<script src="//static.nay.su/js/util.js" type="text/javascript"></script>

		<script src="/assets/js/volume.js" type="text/javascript"></script>
		<script src="/assets/js/animations.js" type="text/javascript"></script>
		<script src="/assets/js/radio.js?v<?php echo CLIENT_VERSION; ?>" type="text/javascript"></script>
		<script src="/assets/js/core.js?v<?php echo CLIENT_VERSION; ?>" type="text/javascript"></script>
		
		<style type="text/css">
			body, html
			{
				background: #{$background_color} url(/assets/sprites/{$background_mode}0.jpg) no-repeat center;
				background-size: cover;
				background-attachment: fixed;
			}
		</style>

		<title>Радио &laquo;Советская волна&raquo;</title>
    </head>

    <body>
        <script type="text/javascript">
            var SITE_MODE = '{$site_mode}';
        </script>
        
        <!-- BRIGHT -->
		<div id="bright-overlay" onclick="hideLeftPanels()"></div> 
		
		{include file='engine/templates/content/player.tpl'}
		{include file='engine/templates/menus.tpl'}
		{include file='engine/templates/navi.tpl'}

		<div id="panel-active-air"></div>
		
    </body>
</html>
