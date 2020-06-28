<?php
/* Smarty version 3.1.34-dev-7, created on 2020-06-28 18:27:38
  from '/home/pavel/dev/frontend/engine/templates/navi.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5ef8b6ea9a06b2_13099062',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '49694d56558873c6679cb159cbd253449a1387f9' => 
    array (
      0 => '/home/pavel/dev/frontend/engine/templates/navi.tpl',
      1 => 1593358057,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5ef8b6ea9a06b2_13099062 (Smarty_Internal_Template $_smarty_tpl) {
?><!-- NAVI -->
<div id="navi">
    <div id="navi-back" onclick="hideLeftPanels()"></div>

    <div class="navi-block" id="side">
        
        <div id="navi-links" onclick="toggleMenu('#links-panel')">Ссылки</div>
        <div id="navi-separator"></div>
        <div id="navi-air" onclick="toggleMenu('#air-panel')">Эфир</div>
        <div id="navi-separator"></div>

        <div id="panel-active-air"></div>
        <div id="panel-active-links"></div>
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

        <div id="volume-speaker">
            <img id="volume-speaker-logo" src="/assets/sprites/icons/volume.png" align="absmiddle" />
        </div>

        <div id="volume-container">            
            <input id="volume-range" type="range" min="0" max="100" step="1" id="volume" />
        </div>

        <div id="navi-separator"></div>

        <a href="#" id="switch-back"
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
