<?php
/* Smarty version 3.1.34-dev-7, created on 2020-07-12 10:49:04
  from 'C:\Dev\frontend\engine\templates\content\player.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5f0aeaa0ebbb51_85604865',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'df4feaab8c181de23d6c41b386c0b928428f4213' => 
    array (
      0 => 'C:\\Dev\\frontend\\engine\\templates\\content\\player.tpl',
      1 => 1594550240,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5f0aeaa0ebbb51_85604865 (Smarty_Internal_Template $_smarty_tpl) {
?><div id="player-wrapper">
	<div id="player">
		<div id="player-artist" class="player-track<?php if ($_smarty_tpl->tpl_vars['site_mode']->value == 'night') {?>night<?php }?>">
			<a target="_blank" title="Cтраница артиста" id="player-artist-link"></a>
		</div>

		<div id="player-title" class="player-track<?php if ($_smarty_tpl->tpl_vars['site_mode']->value == 'night') {?>night<?php }?>"">
			Соединение...
		</div>

		<div id="player-switch" class="player-switch-stalled" onclick="radioToggle()"></div>

		<div id="player-city" class="player-track<?php if ($_smarty_tpl->tpl_vars['site_mode']->value == 'night') {?>night<?php }?>""></div>


	</div>
</div>
<?php }
}
