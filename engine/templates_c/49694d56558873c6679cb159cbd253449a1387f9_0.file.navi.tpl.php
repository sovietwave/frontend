<?php
/* Smarty version 3.1.34-dev-7, created on 2020-07-05 16:22:44
  from '/home/pavel/dev/frontend/engine/templates/navi.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5f01d424643953_41980202',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '49694d56558873c6679cb159cbd253449a1387f9' => 
    array (
      0 => '/home/pavel/dev/frontend/engine/templates/navi.tpl',
      1 => 1593955363,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5f01d424643953_41980202 (Smarty_Internal_Template $_smarty_tpl) {
?><!-- NAVI -->
<div id="navi">
    <div class="navi-block-side" id="navi-block-left">
        <div id="links-toggler" class="clickable panel-toggler">Ссылки</div>
        <div id="air-toggler" class="clickable panel-toggler">Эфир</div>
    </div>
    
    <div class="navi-block-side" id="navi-block-right">
        <div id="listeners-container">
            <img src="/assets/sprites/icons/listeners.png"/>
            <div id="listeners-count">?</div>
        </div>

        <div class="clickable" id="volume-speaker">
            <img id="volume-speaker-logo" src="/assets/sprites/icons/volume.png"/>
        </div>

        <div class="clickable" id="volume-container">            
            <input id="volume-range" type="range" min="0" max="100" step="1" id="volume"/>
        </div>

        <a href="#" class="clickable" id="switch-back" onclick="switchCurrentBackground();"> 
            <img src="/assets/sprites/icons/back.png"/>       
        </a> 
    </div>
</div>

<img class="clickable" id="navi-logo" src="/assets/sprites/logo.png"/>
<?php }
}
