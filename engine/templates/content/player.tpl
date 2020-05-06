<div id="player-wrapper">
	<div id="player">
		<div id="player-artist" class="player-track{if $site_mode eq 'night'}night{/if}">
			<a target="_blank" title="Посетить страницу исполнителя" id="player-artist-link"></a>
		</div>

		<div id="player-title" class="player-track{if $site_mode eq 'night'}night{/if}"">
			- устанавливаю -
		</div>

		<div id="player-switch" class="player-switch-stalled" onclick="radioToggle()"></div>

		<div id="player-city" class="player-track{if $site_mode eq 'night'}night{/if}""></div>


	</div>
</div>
