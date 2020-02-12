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
		<link rel="stylesheet" href="assets/styles/soviet.css?v<?php echo CLIENT_VERSION; ?>">
		<link rel="stylesheet" href="assets/styles/navi.css?v<?php echo CLIENT_VERSION; ?>">

		<link rel="apple-touch-icon" href="/assets/sprites/icon-apple.png">
		<link rel="apple-touch-icon-precomposed" sizes="128x128" href="/assets/sprites/icon-apple.png">
		<link rel="shortcut icon" sizes="128x128" href="/assets/sprites/icon-android.png">

		<script src="//static.nay.su/js/jquery.js" type="text/javascript"></script>
		<script src="//static.nay.su/js/util.js" type="text/javascript"></script>

		<script src="/assets/js/radio.js?v<?php echo CLIENT_VERSION; ?>" type="text/javascript"></script>
		<script src="/assets/js/core.js?v<?php echo CLIENT_VERSION; ?>" type="text/javascript"></script>

		<style type="text/css">
			body, html
			{
				background: #<?php echo ($content['background_color']); ?> url(/assets/sprites/<?php echo ($content['background_mode']); ?>0.jpg) no-repeat center;
				background-size: cover;
				background-attachment: fixed;
			}
		</style>

		<title>Радио &laquo;Советская волна&raquo;</title>
    </head>

    <body>
        <script type="text/javascript">
            var SITE_MODE = '<?php echo ($content['site_mode']); ?>';
        </script>
        
        <a href="https://vk.com/volna2_fest" target="_blank">
        <div id="sv-fest-2">
            <table align="center" height="100%">
                <tr valign="middle">
                <td align="right" width="300">Музыкальный<br>фестиваль</td>
                <td><img src="assets/sprites/volna2.png" hspace="7" height="52"></td>
                <td align="left" width="300">10 Августа<br>Москва</td>
                </tr>      
            </table>
        </div>
        </a>

		<?php
			include_once ('engine/templates/content/player.tpl');
			include_once ('engine/templates/footer.tpl');
			include_once ('engine/templates/navy.tpl');
		?>
		</include>
    </body>
</html>