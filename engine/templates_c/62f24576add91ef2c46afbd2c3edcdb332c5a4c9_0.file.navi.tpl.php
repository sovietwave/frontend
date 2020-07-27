<?php
/* Smarty version 3.1.34-dev-7, created on 2020-07-27 21:23:51
  from '/home/pavel/dev/sovietwave/engine/templates/navi.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5f1f1bb7d03098_04154301',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '62f24576add91ef2c46afbd2c3edcdb332c5a4c9' => 
    array (
      0 => '/home/pavel/dev/sovietwave/engine/templates/navi.tpl',
      1 => 1595874183,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5f1f1bb7d03098_04154301 (Smarty_Internal_Template $_smarty_tpl) {
?><!-- NAVI -->
<div id="navi">
    <div class="navi-block-side" id="navi-block-left">
        <div id="links-toggler" class="clickable panel-toggler">
            Ссылки
            <img src="./assets/sprites/icons/links.png">
        </div>
        <div id="air-toggler" class="clickable panel-toggler">
            Эфир
            <img src="./assets/sprites/icons/playlist.png">
        </div>
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

        <a href="#" class="clickable" id="switch-back"> 
            <img src="/assets/sprites/icons/back.png"/>       
        </a> 
    </div>
</div>

<img class="clickable" id="navi-logo" src="/assets/sprites/logo.png"/>
<?php }
}
