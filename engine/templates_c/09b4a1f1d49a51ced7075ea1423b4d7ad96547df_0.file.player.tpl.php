<?php
/* Smarty version 3.1.34-dev-7, created on 2020-06-16 19:57:19
  from '/home/pavel/dev/frontend/engine/templates/content/player.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5ee8f9ef7246c0_80355988',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '09b4a1f1d49a51ced7075ea1423b4d7ad96547df' => 
    array (
      0 => '/home/pavel/dev/frontend/engine/templates/content/player.tpl',
      1 => 1592324883,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5ee8f9ef7246c0_80355988 (Smarty_Internal_Template $_smarty_tpl) {
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
