    
    

    <div id="player-wrapper">
      <div id="player">
        
        <div id="player-artist" class="player-track<?php if ($content['site_mode'] == 'night') echo (' night'); ?>">
          <a target="_blank" title="Посетить страницу исполнителя">
            <span id="player-artist-link">- связь с Центром -</span>
          </a>
        </div>
      
        <div id="player-title" class="player-track<?php if ($content['site_mode'] == 'night') echo (' night'); ?>">
          - устанавливаю -
        </div>

        <div id="player-switch" class="player-switch-stalled" onclick="radioToggle()">
        </div>

        <div id="player-city" class="player-track<?php if ($content['site_mode'] == 'night') echo (' night'); ?>">        
        </div>
      </div>
    </div>