		<!--<main>-->

<!-- LINKS -->
    <div id="panel">
      <div id="links">
        <div id="links-title">#sovietwave</div>
        <div id="panel-top-gradient"></div>

        <!--
        <a href="https://vk.com/soviet_wave" id="links-button-fest"
          class="links-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" target="_blank">

        <table align="center">

          <tr><td><img src="assets/sprites/icons/volna2_sticker.png" id="links-button-fest-icon"/></td></tr>
          <tr><td>Фестиваль</td></tr>
        </table>
        </a>
      -->

        <a href="https://bumazhnaya-fabrika.timepad.ru/event/992416/" id="links-button-fest"
          class="links-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" target="_blank"><img
            src="assets/sprites/icons/volna2.png" class="links-icon" />Фестиваль</a>

        <a href="https://vk.com/soviet_wave" id="links-button-vk"
          class="links-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" target="_blank"><img
            src="assets/sprites/icons/vk.png" class="links-icon" />Сообщество</a>

        <a href="https://t.me/sovietwave" id="links-button-telegram"
          class="links-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" target="_blank"><img
            src="assets/sprites/icons/telegram.png" class="links-icon" />Канал</a><br />

        <a href="https://t.me/sovietwave_chat" id="links-button-chat"
          class="links-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" target="_blank"><img
            src="assets/sprites/icons/chat.png" class="links-icon" />Кухонька</a>

        <a href="https://soundcloud.com/sovietwave" id="links-button-soundcloud"
          class="links-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" target="_blank"><img
            src="assets/sprites/icons/soundcloud.png" class="links-icon" />Soundcloud</a>

        <a href="https://fb.me/sovietwave" id="links-button-facebook"
          class="links-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" target="_blank"><img
            src="assets/sprites/icons/facebook.png" class="links-icon" />Facebook</a>

<!--
        <a href="#" id="links-button-back"
          class="links-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" onclick="switchCurrentBackground(); return false;"><img
            src="assets/sprites/icons/back.png" class="links-icon" />Сменить фон</a>
-->

        <a href="/listen.m3u" id="links-button-m3u"
          class="links-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" target="_blank"><img
            src="assets/sprites/icons/m3u.png" class="links-icon" />Playlist.m3u</a>

        <div id="links-text-m3u">
          Файл для проигрывателей
        </div>
        
        <!--
        <div id="links-madeby"><a href="youth.su">Сделано в<br><img src="assets/sprites/icons/youth.png"></a></div>
        -->

        <div id="panel-bottom-gradient"></div>

      </div>
    </div>

    <!-- BRIGHT -->
    <div id="air-active-overlay" onclick="hideLeftPanels()"></div> 

    <!-- AIR -->
    <div id="air-panel">
      <div id="air-list">
        <div id="air-title-section">
          <!--<div id="air-title"></div>-->
          <div id="air-start-time"></div>
          <div id="air-tags"></div>
          <div id="air-end-time"></div>
        </div>

        <div id="air-playlist">
          Ждём ответа из Центра...
        </div>
        <div id="panel-top-gradient"></div>
        <div id="panel-bottom-gradient"></div>
      </div>
    </div>

    <!-- NAVI -->
    <div id="navi-logo"><img src="/assets/sprites/logo.png" onclick="toggleNavi()"/></div>
    <div id="navi">

       

      <div id="navi-links" onclick="toggleLinks()">Ссылки</div>
      <div id="navi-air" onclick="toggleAirPanel()">Эфир</div>
     
        <!--
      <div id="navi-back" onclick="switchCurrentBackground(); return false;">
        <div class="links-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" >Фон</div>        
      </div>-->

       <div class="listeners">
        <img src="/assets/sprites/icons/listeners.png" align="absmiddle" /> <span id="listeners">-1</span>
      </div>
      
      <div id="player-volume">
        <img id="volume-speaker" src="/assets/sprites/icons/volume.png" align="absmiddle" onclick="toggleMute()" />
        <input class="range-input" type="range" min="0" max="100" step="5" id="volume" />
      </div>
    
       <div class="switch_back">
        <a href="#" id="links-button-back"
          class="links-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" onclick="switchCurrentBackground(); return false;">
        <img src="/assets/sprites/icons/back.png" align="absmiddle" /></a>        
      </div>

    </div>
  </div>

		<!-- Yandex.Metrika counter --><script type="text/javascript" > (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter45463833 = new Ya.Metrika2({ id:45463833, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/tag.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks2"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/45463833" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->

	</body>
</html>