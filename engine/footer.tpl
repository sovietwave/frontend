		</main>

		<footer>	
			<div id="navi">

					<div id="navi-left">

						<div class="navi-text-pconly">
						<a href="https://vk.com/soviet_wave" target="_blank">#sovietwave</a>		
						</div>

						<a href="https://vk.com/soviet_wave" id="navi-button-vk" title="Советская волна в ВК" class="navi-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" target="_blank"></a>

						<a href="https://t.me/sovietwave" id="navi-button-t" title="Советская волна в Telegram" class="navi-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" target="_blank"></a>

						<!--
						<a href="https://sovietwave.su/listen.m3u" id="navi-button-m3u" title="Слушать в проигрывателе" class="navi-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" target="_blank"></a>
						-->
						<a href="https://fb.me/sovietwave" id="navi-button-fb" title="Facebook" class="navi-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" target="_blank"></a>
						<a href="https://soundcloud.com/sovietwave" id="navi-button-sc" title="Soundcloud" class="navi-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" target="_blank"></a>
					
						<a href="https://sovietwave.su/listen.m3u" id="navi-button-m3u" title="Слушать в проигрывателе" class="navi-button<?php if ($content['site_mode'] == 'night') echo (' night'); ?>" target="_blank"></a>
					</div>

					<img src="assets/sprites/logo.png" width="100%" id="navi-logo">

					<div id="navi-modes">						
						<a href="javascript:void(0)" id="navi-button-day" title="Дневной эфир - с 7 утра до 7 вечера (по Москве)" class="navi-button<?php if ($content['site_mode'] == 'day') echo (' enlarged'); ?>" onclick="switchBackground('day')"></a>

						<a href="javascript:void(0)" id="navi-button-evening" title="Вечерний эфир - с 7 вечера до полуночи (по Москве)" class="navi-button<?php if ($content['site_mode'] == 'evening') echo (' enlarged'); ?>"  onclick="switchBackground('evening')"></a>

						<a href="javascript:void(0)" id="navi-button-night" title="Ночной эфир - с полуночи до 7 утра (по Москве)" class="navi-button<?php if ($content['site_mode'] == 'night') echo (' enlarged'); ?>"  onclick="switchBackground('night')"></a>
					</div>

					<a href="https://asterleen.com" target="_blank" id="footer-madeby">
						<div id="navi-right">						
							Сделано в<br><u>Астерлин</u>
						</div>
					</a>
			</div>


			<!--
			<div class="dev-info<?php if ($content['site_mode'] == 'night') echo (' night'); ?>">Сделано в <a href="https://asterleen.com" target="_blank">Asterleen</a></div>
		-->
		</footer>

		<!-- Yandex.Metrika counter --> <script type="text/javascript" > (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter45463833 = new Ya.Metrika({ id:45463833, clickmap:true, trackLinks:true, accurateTrackBounce:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/45463833" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->
	</body>
</html>