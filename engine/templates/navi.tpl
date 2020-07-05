<!-- NAVI -->
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
