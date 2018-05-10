			<div id="player">
				<div class="player-track<?php if ($content['site_mode'] == 'night') echo (' night'); ?>"><a id="player-artist" target="_blank"<?php if ($content['site_mode'] == 'night') echo (' class="night"'); ?> title="Посетить страницу исполнителя">- устанавливаю -</a></div>
				<div id="player-title" class="player-track<?php if ($content['site_mode'] == 'night') echo (' night'); ?>">- связь с Центром -</div>
				<table id="player-controls">
					<tr>
						<td id="player-switch" class="player-switch-stalled" onclick="radioToggle()">
						</td>
						<td id="player-volume">
							<input type="range" min="0" max="100" step="5" id="volume">
						</td>
					</tr>					
				</table>
			</div>
			<script type="text/javascript">
				<?php include ('engine/content/links.json'); ?>
			</script>