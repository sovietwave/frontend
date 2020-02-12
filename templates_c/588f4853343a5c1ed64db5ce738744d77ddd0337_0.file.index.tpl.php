<?php
/* Smarty version 3.1.34-dev-7, created on 2020-02-11 23:28:01
  from '/home/pavel/Dev/sovietwave/engine/templates/index.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5e430e511a6677_11226322',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '588f4853343a5c1ed64db5ce738744d77ddd0337' => 
    array (
      0 => '/home/pavel/Dev/sovietwave/engine/templates/index.tpl',
      1 => 1581452791,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:./footer.tpl' => 1,
    'file:./navi.tpl' => 1,
  ),
),false)) {
function content_5e430e511a6677_11226322 (Smarty_Internal_Template $_smarty_tpl) {
?><!DOCTYPE html>


<html lang="ru">
    <head>
        <meta name="viewport" content="initial-scale=1.0">
		<meta charset="utf-8">

		<meta name="description" content="Современная отечественная музыка, мечтающая о прошлом.">
		<meta name="keywords" content="радио, ссср, советское, советская волна, советвейв, советвэйв,
        radio, sovietwave, chillwave, retrowave, dreamwave, dreampop, weedwave, indie, ussr, soviet union">

		<meta property="og:image" content="https://<?php echo '<?php ';?>
echo($_SERVER['HTTP_HOST']); <?php echo '?>';?>
/assets/sprites/social.jpg">
		<meta name="mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-title" content="Советская волна">
		<meta name="application-name" content="Советская волна">

		<link rel="stylesheet" href="assets/styles/fonts.css?v<?php echo '<?php ';?>
echo CLIENT_VERSION; <?php echo '?>';?>
">
		<link rel="stylesheet" href="assets/styles/rangeslider.css?v<?php echo '<?php ';?>
echo CLIENT_VERSION; <?php echo '?>';?>
">
		<link rel="stylesheet" href="assets/styles/soviet.css?v<?php echo '<?php ';?>
echo CLIENT_VERSION; <?php echo '?>';?>
">
		<link rel="stylesheet" href="assets/styles/navi.css?v<?php echo '<?php ';?>
echo CLIENT_VERSION; <?php echo '?>';?>
">

		<link rel="apple-touch-icon" href="/assets/sprites/icon-apple.png">
		<link rel="apple-touch-icon-precomposed" sizes="128x128" href="/assets/sprites/icon-apple.png">
		<link rel="shortcut icon" sizes="128x128" href="/assets/sprites/icon-android.png">

		<?php echo '<script'; ?>
 src="//static.nay.su/js/jquery.js" type="text/javascript"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 src="//static.nay.su/js/util.js" type="text/javascript"><?php echo '</script'; ?>
>

		<?php echo '<script'; ?>
 src="/assets/js/radio.js?v<?php echo '<?php ';?>
echo CLIENT_VERSION; <?php echo '?>';?>
" type="text/javascript"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 src="/assets/js/core.js?v<?php echo '<?php ';?>
echo CLIENT_VERSION; <?php echo '?>';?>
" type="text/javascript"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 src="/assets/js/rangeslider.js?v<?php echo '<?php ';?>
echo CLIENT_VERSION; <?php echo '?>';?>
" type="text/javascript"><?php echo '</script'; ?>
>

		<style type="text/css">
			body, html
			{
				background: #<?php echo '<?php ';?>
echo ($content['background_color']); <?php echo '?>';?>
 url(/assets/sprites/<?php echo '<?php ';?>
echo ($content['background_mode']); <?php echo '?>';?>
0.jpg) no-repeat center;
				background-size: cover;
				background-attachment: fixed;
			}
		</style>

        <?php $_smarty_tpl->_subTemplateRender('file:./footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
        <?php $_smarty_tpl->_subTemplateRender('file:./navi.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

		<title>Радио &laquo;Советская волна&raquo;</title>
    </head>

    <body>
        <?php echo '<script'; ?>
 type="text/javascript">
            var SITE_MODE = '<?php echo '<?php ';?>
echo ($content['site_mode']); <?php echo '?>';?>
';
        <?php echo '</script'; ?>
>
        
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
    </body>
</html><?php }
}
