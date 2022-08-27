<!-- NAVI -->
<div id="navi">
    <div id="navi-back" onclick="hideLeftPanels()"></div>

    <div class="navi-block" id="left">
        <div id="navi-links" onclick="toggleLinks()">
            <div id="standalone-only">Ссылки</div>
            <img src="/assets/sprites/icons/links.png" id="mobile-button">
        </div>

        <div id="navi-air" onclick="toggleAirPanel()">
            <div id="standalone-only">Эфир</div>
            <img src="/assets/sprites/icons/air.png" id="mobile-button">
        </div>       

        <div id="panel-active-links"></div>
        <div id="panel-active-air"></div>
    </div>
    
    <div class="navi-block" id="right">
       
        <div id="listeners-container" class="navi-block-content">
             
            <img src="/assets/sprites/icons/listeners.png" align="absmiddle" /> <span id="listeners">?</span>
            <div id="listeners"></div>
        
        </div>

        <div id="volume-speaker" class="navi-block-content">
            <img id="volume-speaker-logo" src="/assets/sprites/icons/volume.png" align="absmiddle" />
        </div>

        <div id="volume-container" class="navi-block-content">            
            <input id="volume-range" type="range" min="0" max="100" step="1" id="volume" />
        </div>

        <a href="#" id="switch-back" class="links-button navi-block-content"" onclick="switchCurrentBackground(); return false;">            
                <img src="/assets/sprites/icons/back.png" align="absmiddle" />       
        </a>
    </div>

<!--
    <div class="navi-block" id="mobile-left">        
        <div id="navi-links" onclick="toggleLinks()"><img src="/assets/sprites/icons/links.png" id="mobile-button"></div>
    </div>

    <div class="navi-block" id="mobile-center"></div>

    <div class="navi-block" id="mobile-right">        
        <div id="navi-air" onclick="toggleAirPanel()"><img src="/assets/sprites/icons/air.png" id="mobile-button"></div>
    </div>
-->
</div>


<div id="navi-logo"><img src="/assets/sprites/logo.png" onclick="toggleNavi()"/></div>