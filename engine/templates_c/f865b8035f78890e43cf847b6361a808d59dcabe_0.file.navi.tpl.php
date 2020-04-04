<?php
/* Smarty version 3.1.34-dev-7, created on 2020-04-04 16:16:07
  from '/home/pavel/Dev/sovietwave/engine/templates/navi.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5e88889789e3e6_27262421',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'f865b8035f78890e43cf847b6361a808d59dcabe' => 
    array (
      0 => '/home/pavel/Dev/sovietwave/engine/templates/navi.tpl',
      1 => 1586006166,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5e88889789e3e6_27262421 (Smarty_Internal_Template $_smarty_tpl) {
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

            <div id=listeners-container>
                <img src="/assets/sprites/icons/listeners.png" align="absmiddle" /> <span id="listeners">-1</span>
                <div id="listeners"></div>
            </div>
        </div>
    </div>
</div><?php }
}
