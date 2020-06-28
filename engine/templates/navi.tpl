<!-- NAVI -->
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
                class="links-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" onclick="switchCurrentBackground(); return false;">
                
                <img src="/assets/sprites/icons/back.png" align="absmiddle" />       
        </a> 

    </div>
</div>


<div id="navi-logo"><img src="/assets/sprites/logo.png" onclick="toggleNavi()"/></div>
