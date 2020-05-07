<!-- NAVI -->
<div id="navi">
    <div class="navi-block" id="side">
        
        <div id="navi-links" onclick="toggleLinks()">Ссылки</div>
        <div id="navi-separator"></div>
        <div id="navi-air" onclick="toggleAirPanel()">Эфир</div>
        <div id="navi-separator"></div>
    </div>

    
    <div class="navi-block" id="central">
        <div id="navi-logo"><img src="/assets/sprites/logo.png" onclick="toggleNavi()"/></div>
    </div>
    
    <div class="navi-block" id="side">
        <div id="navi-separator"></div>
        <div id="navi-air-mobile" onclick="toggleAirPanel()">Эфир</div>

        <div id="listeners-container">
            <img src="/assets/sprites/icons/listeners.png" align="absmiddle" /> <span id="listeners">?</span>
            <div id="listeners"></div>
        </div>

        <div id="navi-separator"></div>

        <div id="volume-speaker">
            <img src="/assets/sprites/icons/volume.png" align="absmiddle" onclick="toggleMute()" />
        </div>

        <div id="volume-container">            
            <input id="volume-range" type="range" min="0" max="100" step="1" id="volume" />
        </div>

        <div id="navi-separator"></div>

        <a href="#" id="switch-back-button"
                class="links-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" onclick="switchCurrentBackground(); return false;">
            <div id="switch-back">
                
                <img src="/assets/sprites/icons/back.png" align="absmiddle" />       
            </div>
        </a> 


    </div>
</div>

<!-- LOGO -->
<div id="navi-logo-clear"><img src="/assets/sprites/logo.png" onclick="toggleNavi()"/></div>

