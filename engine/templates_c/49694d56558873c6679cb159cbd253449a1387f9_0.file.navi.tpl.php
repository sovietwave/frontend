<?php
/* Smarty version 3.1.34-dev-7, created on 2020-07-04 12:15:15
  from '/home/pavel/dev/frontend/engine/templates/navi.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5f0048a3997f95_25637126',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '49694d56558873c6679cb159cbd253449a1387f9' => 
    array (
      0 => '/home/pavel/dev/frontend/engine/templates/navi.tpl',
      1 => 1593854050,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5f0048a3997f95_25637126 (Smarty_Internal_Template $_smarty_tpl) {
?><!-- NAVI -->
<div id="navi">
    <div id="navi-back" onclick="hideLeftPanels()"></div>

    <div class="navi-block" id="side">
        <div class="clickable panel-toggler" id="navi-links" onclick="togglePanel(this.id, '#links-panel')">Ссылки</div>
        <div id="navi-separator"></div>
        <div class="clickable panel-toggler" id="navi-air" onclick="togglePanel(this.id, '#air-panel')">Эфир</div>
        <div id="navi-separator"></div>
    </div>
   
    <div class="navi-block" id="central"></div>
    
    <div class="navi-block" id="side">
        <div id="navi-separator"></div>
        <div id="navi-air-mobile" onclick="toggleAirPanel()">Эфир</div>

        <div id="listeners-container">
            <img src="/assets/sprites/icons/listeners.png" align="absmiddle" /> <span id="listeners">?</span>
            <div id="listeners"></div>
        </div>

        <div id="navi-separator"></div>

        <div class="clickable" id="volume-speaker">
            <img id="volume-speaker-logo" src="/assets/sprites/icons/volume.png" align="absmiddle" />
        </div>

        <div class="clickable" id="volume-container">            
            <input id="volume-range" type="range" min="0" max="100" step="1" id="volume" />
        </div>

        <div id="navi-separator"></div>

        <a href="#" class="clickable" id="switch-back"
            class="links-button<?php echo '<?php ';?>
if ($content['site_mode'] == 'night') echo (' night'); <?php echo '?>';?>
" onclick="switchCurrentBackground(); return false;">
                
            <img src="/assets/sprites/icons/back.png" align="absmiddle" />       
        </a> 

    </div>
</div>

<div id="navi-logo"><img src="/assets/sprites/logo.png" onclick="toggleNavi()"/></div>
<?php }
}
