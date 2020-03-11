<?php
/* Smarty version 3.1.34-dev-7, created on 2020-02-20 21:08:41
  from '/home/pavel/Dev/sovietwave/engine/templates/content/player.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5e4ecb2911dbf1_77221769',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'e305ba5749ba60ca7a5d40908c7a75510150d612' => 
    array (
      0 => '/home/pavel/Dev/sovietwave/engine/templates/content/player.tpl',
      1 => 1582221160,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5e4ecb2911dbf1_77221769 (Smarty_Internal_Template $_smarty_tpl) {
?><div id="player-wrapper">
	<div id="player">
		<div id="player-artist" class="player-track<?php if ($_smarty_tpl->tpl_vars['site_mode']->value == 'night') {?>night<?php }?>">
			<a target="_blank" title="Посетить страницу исполнителя" id="player-artist-link"></a>
		</div>

		<div id="player-title" class="player-track<?php echo '<?php ';?>
if ($content['site_mode'] == 'night') echo (' night'); <?php echo '?>';?>
">
			- устанавливаю -
		</div>

		<div id="player-switch" class="player-switch-stalled" onclick="radioToggle()"></div>

		<div id="player-city" class="player-track<?php echo '<?php ';?>
if ($content['site_mode'] == 'night') echo (' night'); <?php echo '?>';?>
"></div>
	</div>
</div>
<?php }
}
