<?php
/* Smarty version 3.1.34-dev-7, created on 2020-07-05 13:13:37
  from '/home/pavel/dev/frontend/engine/templates/panels.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5f01a7d16b2449_11467777',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '5590e5e98590cbf9a12022e2d4aff9510af752ed' => 
    array (
      0 => '/home/pavel/dev/frontend/engine/templates/panels.tpl',
      1 => 1593943998,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5f01a7d16b2449_11467777 (Smarty_Internal_Template $_smarty_tpl) {
?><!-- BRIGHT OVERLAY -->
<div id="bright-overlay" onclick="hidePanels()"></div>

<!-- LINKS PANEL-->
<div class="panel" id="links-panel">	
	<div class="panel-title" id="links-title">#sovietwave</div>
	<div class="panel-content" id="links-content">
		<a href="https://vk.com/soviet_wave" target="blank">
			<img src="assets/sprites/icons/vk.png" class="links-icon" />
			Сообщество
		</a>

		<a href="https://www.youtube.com/channel/UCZkZ1JF77v1xv8Vlg1N6QOA" target="blank">
			<img src="assets/sprites/icons/youtube.png" class="links-icon" />
			YouTube
		</a>

		<a href="https://tglink.ru/sovietwave" target="blank">
			<img src="assets/sprites/icons/telegram.png" class="links-icon" />
			Канал
		</a>

		<a href="https://tglink.ru/sovietwave_chat" target="blank">
			<img src="assets/sprites/icons/chat.png" class="links-icon" />
			Кухонька
		</a>

		<a href="https://soundcloud.com/sovietwave" target="blank">
			<img src="assets/sprites/icons/soundcloud.png" class="links-icon"/>
			Soundcloud
		</a>

		<a href="https://www.patreon.com/sovietwave" target="blank">
			<img src="assets/sprites/icons/patreon.png" class="links-icon"/>
			Поддержать
		</a>

		<a href="/listen.m3u" target="blank">
			<img src="assets/sprites/icons/m3u.png" class="links-icon" />
			Файл для проигрывателей
		</a>
	</div>
</div>


<!-- AIR PANEL -->
<div class="panel" id="air-panel">
	<div class="panel-title" id="air-title">
		<div id="air-title-mode">Mode</div>
		<div id="air-times">Times</div>
		<div id="air-tags">Tags</div>
	</div>

	<div class="panel-content" id="air-content">
		Ждём ответа из Центра...
	</div>
</div>

<!-- Yandex.Metrika counter -->
<?php echo '<script'; ?>
 type="text/javascript" > (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter45463833 = new Ya.Metrika2({ id:45463833, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/tag.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks2"); <?php echo '</script'; ?>
> <noscript><div><img src="https://mc.yandex.ru/watch/45463833" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<?php }
}
