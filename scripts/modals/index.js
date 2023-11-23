window.addEventListener('DOMContentLoaded', () => {
	const HISTORY_GAME = document.querySelector('#history-game');
	const BTN_CLOSE_HISTORY = HISTORY_GAME.querySelector('#history-btn');

	BTN_CLOSE_HISTORY.addEventListener(
		'click',
		() => {
			HISTORY_GAME.classList.add('disable');
		},
		{
			once: true,
		}
	);
});
