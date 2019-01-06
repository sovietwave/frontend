<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="initial-scale=1.0">
		<meta charset="utf-8">

		<meta name="description" content="Современная отечественная музыка, мечтающая о прошлом. Modern music dreaming of the past.">
		<meta name="keywords" content="радио, ссср, советское, советская волна, советвейв, советвэйв,
radio, sovietwave, chillwave, retrowave, dreamwave, dreampop, weedwave, indie, ussr, soviet union">

		<meta property="og:image" content="https://sovietwave.su/assets/sprites/social.jpg">
		<meta name="mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-title" content="Советская волна">
		<meta name="application-name" content="Советская волна">


		<link rel="stylesheet" href="assets/fonts.css?v<?php echo CLIENT_VERSION; ?>">
		<link rel="stylesheet" href="assets/rangeslider.css?v<?php echo CLIENT_VERSION; ?>">
		<link rel="stylesheet" href="assets/soviet.css?v<?php echo CLIENT_VERSION; ?>">
		<link rel="apple-touch-icon" href="/assets/sprites/icon-apple.png">
		<link rel="apple-touch-icon-precomposed" sizes="128x128" href="/assets/sprites/icon-apple.png">
		<link rel="shortcut icon" sizes="128x128" href="/assets/sprites/icon-android.png">

		<script src="//static.nay.su/js/jquery.js" type="text/javascript"></script>
		<script src="//static.nay.su/js/util.js" type="text/javascript"></script>

		<script src="/assets/js/radio.js?v<?php echo CLIENT_VERSION; ?>" type="text/javascript"></script>
		<script src="/assets/js/core.js?v<?php echo CLIENT_VERSION; ?>" type="text/javascript"></script>
		<script src="/assets/js/rangeslider.js?v<?php echo CLIENT_VERSION; ?>" type="text/javascript"></script>

		<style type="text/css">
			body, html
			{
				background: #<?php echo ($content['background_color']); ?> url(/assets/sprites/<?php echo ($content['background_mode']); ?>0.jpg) no-repeat center;
				background-size: cover;
				background-attachment: fixed;
			}
		</style>

		<script type="text/javascript">
			var SITE_MODE = '<?php echo ($content['site_mode']); ?>';
		</script>

		<title>Радио &laquo;Советская волна&raquo;</title>
	</head>
	<body>
		<main<?php if ($content['site_mode'] == 'night') echo (' class="night"'); ?>>