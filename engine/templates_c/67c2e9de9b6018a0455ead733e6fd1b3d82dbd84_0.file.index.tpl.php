<?php
/* Smarty version 3.1.34-dev-7, created on 2020-07-04 12:57:18
  from '/home/pavel/dev/frontend/engine/templates/index.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5f00527ee34372_15806054',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '67c2e9de9b6018a0455ead733e6fd1b3d82dbd84' => 
    array (
      0 => '/home/pavel/dev/frontend/engine/templates/index.tpl',
      1 => 1593856619,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:engine/templates/content/player.tpl' => 1,
    'file:engine/templates/menus.tpl' => 1,
    'file:engine/templates/navi.tpl' => 1,
  ),
),false)) {
function content_5f00527ee34372_15806054 (Smarty_Internal_Template $_smarty_tpl) {
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
		<link rel="stylesheet" href="assets/styles/rangeinput.css?v<?php echo '<?php ';?>
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
 src="/assets/js/volume.js" type="text/javascript"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 src="/assets/js/animations.js" type="text/javascript"><?php echo '</script'; ?>
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

		<title>Радио &laquo;Советская волна&raquo;</title>
    </head>

    <body>
        <?php echo '<script'; ?>
 type="text/javascript">
            var SITE_MODE = '<?php echo $_smarty_tpl->tpl_vars['site_mode']->value;?>
';
        <?php echo '</script'; ?>
>
        
        <!-- BRIGHT -->
		<div id="bright-overlay" onclick="hidePanels()"></div> 
		
		<?php $_smarty_tpl->_subTemplateRender('file:engine/templates/content/player.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
		<?php $_smarty_tpl->_subTemplateRender('file:engine/templates/menus.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
		<?php $_smarty_tpl->_subTemplateRender('file:engine/templates/navi.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
    </body>
</html>
<?php }
}
