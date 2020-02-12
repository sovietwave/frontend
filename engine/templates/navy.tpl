<!-- NAVI -->
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
                    class="links-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" onclick="switchCurrentBackground(); return false;">
                <img src="/assets/sprites/icons/back.png" align="absmiddle" /></a>        
            </div>

            <div id="listeners">
                <img src="/assets/sprites/icons/listeners.png" align="absmiddle" /> <span id="listeners">-1</span>
            </div>
        </div>
    </div>
</div>