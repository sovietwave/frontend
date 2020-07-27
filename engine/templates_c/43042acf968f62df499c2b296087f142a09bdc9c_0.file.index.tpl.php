<?php
/* Smarty version 3.1.34-dev-7, created on 2020-07-12 10:49:04
  from 'C:\Dev\frontend\engine\templates\index.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5f0aeaa0e10013_08001474',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '43042acf968f62df499c2b296087f142a09bdc9c' => 
    array (
      0 => 'C:\\Dev\\frontend\\engine\\templates\\index.tpl',
      1 => 1594550240,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:engine/templates/content/player.tpl' => 1,
    'file:engine/templates/panels.tpl' => 1,
    'file:engine/templates/navi.tpl' => 1,
  ),
),false)) {
function content_5f0aeaa0e10013_08001474 (Smarty_Internal_Template $_smarty_tpl) {
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

		<link rel="stylesheet" href="assets/styles/fonts.css">
		<link rel="stylesheet" href="assets/styles/rangeinput.css">
		<link rel="stylesheet" href="assets/styles/scrollbar.css">
		<link rel="stylesheet" href="assets/styles/soviet.css">
		<link rel="stylesheet" href="assets/styles/navi.css">
		<link rel="stylesheet" href="assets/styles/panels.css">

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
 src="/assets/js/utils.js" type="text/javascript"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 src="/assets/js/volume.js" type="text/javascript"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 src="/assets/js/animations.js" type="text/javascript"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 src="/assets/js/air_mode.js" type="text/javascript"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 src="/assets/js/soviet.js" type="text/javascript"><?php echo '</script'; ?>
>

		<title>Радио &laquo;Советская волна&raquo;</title>
    </head>

    <body>
		<?php $_smarty_tpl->_subTemplateRender('file:engine/templates/content/player.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
		<?php $_smarty_tpl->_subTemplateRender('file:engine/templates/panels.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
		<?php $_smarty_tpl->_subTemplateRender('file:engine/templates/navi.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
    </body>
</html>
<?php }
}
