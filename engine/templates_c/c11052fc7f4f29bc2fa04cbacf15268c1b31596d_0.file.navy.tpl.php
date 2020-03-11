<?php
/* Smarty version 3.1.34-dev-7, created on 2020-02-20 21:08:41
  from '/home/pavel/Dev/sovietwave/engine/templates/navy.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5e4ecb29124684_94460708',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'c11052fc7f4f29bc2fa04cbacf15268c1b31596d' => 
    array (
      0 => '/home/pavel/Dev/sovietwave/engine/templates/navy.tpl',
      1 => 1581505906,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5e4ecb29124684_94460708 (Smarty_Internal_Template $_smarty_tpl) {
?><!-- NAVI -->
<div id="navi">
    <div class="navi-block" id="side">
        <div id="navi-links" onclick="toggleLinks()">Ссылки</div>
        <div id="navi-air" onclick="toggleAirPanel()">Эфир</div>
    </div>

    <div class="navi-block" id="central">
        <div id="navi-logo"><img src="/assets/sprites/logo.png" onclick="toggleNavi()"/></div>
    </div>
    
    <div class="navi-block" id="side">
        <div id="volume-container">
            <img id="volume-speaker" src="/assets/sprites/icons/volume.png" align="absmiddle" onclick="toggleMute()" />
            <input id="volume-range" type="range" min="0" max="100" step="5" id="volume" />
        </div>

        <div id="not-volume-container">
            <div id="switch-back">
                <a href="#" id="switch-back-button"
                    class="links-button<?php echo '<?php ';?>
if ($content['site_mode'] == 'night') echo (' night'); <?php echo '?>';?>
" onclick="switchCurrentBackground(); return false;">
                <img src="/assets/sprites/icons/back.png" align="absmiddle" /></a>        
            </div>

            <div id="listeners">
                <img src="/assets/sprites/icons/listeners.png" align="absmiddle" /> <span id="listeners">-1</span>
            </div>
        </div>
    </div>
</div><?php }
}
