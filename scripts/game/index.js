const variableStatus = {
	available: 'available',
	unavailable: 'unavailable',
	success: 'success',
};

const variableResultWritting = {
	isEndLvl: `
		<div>
			<h2>Успешно</h2>
			<p>Переходи к другому уровню</p>
		</div>

	`,
};

const variableModalWritingResult = {
	end: {
		once: `
			<div class="modal__wrapper">
				<h2>Поздравляю ты прошел этап</h2>
				<p>
					Переходи к другому уровню
				</p>
			</div>
		`,
		restart: `
		<div class="modal__wrapper">
			<h2>Поздравляю ты заново прошел этап</h2>
			<p>
				Переходи к другому уровню
			</p>
		</div>
	`,
	},
	stateGame: {
		once: {
			ONE_LVL: `
			<div class="modal__wrapper">
				<h2>Введение в мир ударений</h2>
				<p>
				На первом этапе игры "Мастер ударений: Испытание звуков" герой знакомится с основами ударений. Здесь представлены простые слова, в которых необходимо определить, на какую букву падает ударение. 
				</p>
			</div>
			`,
			TWO_LVL: `
			<div class="modal__wrapper">
				<h2>Углубление в сложности</h2>
				<p>
				На втором этапе игры уровень сложности начинает повышаться. Здесь встречаются слова с более сложными ударениями, включая слова с приставками, суффиксами и неоднозначными ударениями. Игроку предстоит проявить внимательность и умение анализировать структуру слова, чтобы выбрать правильное ударение.
				</p>
			</div>
			`,
			THREE_LVL: `
			<div class="modal__wrapper">
				<h2>Испытание мастерства</h2>
				<p>
				Третий этап является наиболее сложным и требует от игрока полного владения ударениями. Здесь встречаются слова с редкими и необычными ударениями, а также слова с ударениями на неосновных слогах. Игроку предстоит совершенствовать свои навыки и применять все свои знания о правилах ударений. 
				</p>
			</div>
			`,
			FOUR_LVL: `
			<div class="modal__wrapper">
				<h2>Великое финале и достижения</h2>
				<p>
				На последнем этапе игрок сможет применить все свои навыки и знания, чтобы проявить себя как настоящий Мастер Ударений. Здесь представлены самые сложные испытания, включающие слова с разными окончаниями, сложными комбинациями ударений и редкими словами. Завершение этого этапа позволит игроку стать истинным Мастером Ударений 
				</p>
			</div>
			`,
		},
	},
};

const ARRAY_VOWELS = ['а', 'о', 'у', 'ы', 'э', 'е', 'ё', 'и', 'ю', 'я'];

const stateGameOption = {
	ONE_LVL: {
		nameLvl: '1',
		status: variableStatus.available,
		once: true,
		isEnd: false,
		words: [
			{
				id: 0,
				viewText: 'Звонит',
				trueWordIndex: 4,
				isAnswered: false,
			},
			{
				id: 1,
				viewText: 'Досуг',
				trueWordIndex: 3,
				isAnswered: false,
			},
			{
				id: 2,
				viewText: 'Торты',
				trueWordIndex: 1,
				isAnswered: false,
			},
			{
				id: 3,
				viewText: 'Свёкла',
				trueWordIndex: 2,
				isAnswered: false,
			},
			{
				id: 4,
				viewText: 'Бармен',
				trueWordIndex: 1,
				isAnswered: false,
			},
		],
	},
	TWO_LVL: {
		nameLvl: '2',
		once: true,
		isEnd: false,
		status: variableStatus.unavailable,
		words: [
			{
				id: 0,
				viewText: 'Жалюзи',
				trueWordIndex: 5,
				isAnswered: false,
			},
			{
				id: 1,
				viewText: 'Каталог',
				trueWordIndex: 5,
				isAnswered: false,
			},
			{
				id: 2,
				viewText: 'Маркетинг',
				trueWordIndex: 1,
				isAnswered: false,
			},
			{
				id: 3,
				viewText: 'Туфля',
				trueWordIndex: 1,
				isAnswered: false,
			},
			{
				id: 4,
				viewText: 'Древко',
				trueWordIndex: 2,
				isAnswered: false,
			},
		],
	},
	THREE_LVL: {
		nameLvl: '3',
		once: true,
		isEnd: false,
		status: variableStatus.unavailable,
		words: [
			{
				id: 0,
				viewText: 'кухонный',
				trueWordIndex: 1,
				isAnswered: false,
			},
			{
				id: 1,
				viewText: 'Ходатайство',
				trueWordIndex: 3,
				isAnswered: false,
			},
			{
				id: 2,
				viewText: 'Сливовый',
				trueWordIndex: 2,
				isAnswered: false,
			},
			{
				id: 3,
				viewText: 'Иконопись',
				trueWordIndex: 0,
				isAnswered: false,
			},
			{
				id: 4,
				viewText: 'Камбала',
				trueWordIndex: 1,
				isAnswered: false,
			},
		],
	},
	FOUR_LVL: {
		nameLvl: '4',
		once: true,
		isEnd: false,
		status: variableStatus.unavailable,
		words: [
			{
				id: 0,
				viewText: 'Еретик',
				trueWordIndex: 4,
				isAnswered: false,
			},
			{
				id: 1,
				viewText: 'Мельком',
				trueWordIndex: 1,
				isAnswered: false,
			},
			{
				id: 2,
				viewText: 'Генезис',
				trueWordIndex: 1,
				isAnswered: false,
			},
			{
				id: 3,
				viewText: 'Асбест',
				trueWordIndex: 3,
				isAnswered: false,
			},
			{
				id: 4,
				viewText: 'Фалафель',
				trueWordIndex: 3,
				isAnswered: false,
			},
		],
	},
};

const stateGame = {
	nameLvl: 'ONE_LVL',
	indexWord: 0,
	lvl: stateGameOption['ONE_LVL'],
};

///Логика игры

// Изменение состояния

function changeStates({ type = 'answer', state, lvl }) {
	if (type === 'answer') {
		state.lvl.words[state.indexWord].isAnswered = true;
		state.indexWord += 1;
	}

	if (type === 'status') {
		if (state.nameLvl === 'ONE_LVL') {
			if (state.lvl.status) {
				if (state.lvl.status === 'success') {
					stateGameOption['TWO_LVL'].status = variableStatus.available;
				}
			}
		}

		if (state.nameLvl === 'TWO_LVL') {
			if (state.lvl.status) {
				if (state.lvl.status === 'success') {
					stateGameOption['THREE_LVL'].status = variableStatus.available;
				}
			}
		}

		if (state.nameLvl === 'THREE_LVL') {
			if (state.lvl.status) {
				if (state.lvl.status === 'success') {
					stateGameOption['FOUR_LVL'].status = variableStatus.available;
				}
			}
		}
	}

	if (type === 'next') {
		state.indexWord += 1;
	}

	if (type === 'change-once') {
		state.lvl.once = false;
	}

	if (type === 'last') {
		state.indexWord -= 1;
	}

	if (type === 'restart') {
		state.indexWord = 0;
	}

	if (type === 'change-lvl') {
		state.indexWord = 0;
		state.nameLvl = lvl;
		state.lvl = stateGameOption[lvl];
	}
}

/// Рендеры

//1.Проверка:
function renderButtonChangeLvl() {
	try {
		const BUTTON_CHANGE_LVL = Array.from(
			document.querySelectorAll('[data-lvl]')
		);

		BUTTON_CHANGE_LVL.forEach((lvl) => {
			if (
				stateGameOption[lvl.dataset.lvl].status === variableStatus.available
			) {
				lvl.classList.remove('disable');

				lvl.disabled = false;
			}

			if (
				stateGameOption[lvl.dataset.lvl].status === variableStatus.unavailable
			) {
				lvl.classList.add('disable');

				lvl.disabled = true;
			}

			if (stateGameOption[lvl.dataset.lvl].status === variableStatus.success) {
				lvl.classList.add('success');
			}
		});
	} catch (error) {
		console.error('Check Func For Button Lvl', error);
	}
}
//2.Отрисовка дисплея игры:
function renderDisplayGame(state) {
	try {
		const WORD_VIEW = document.querySelector('#game-word');
		const indexWord = state.indexWord;

		state.lvl.words.forEach((word, index) => {
			if (index === indexWord) {
				WORD_VIEW.innerHTML = word.viewText;
				renderLetterBlock(word.viewText);
			}
		});
	} catch (error) {
		console.error(error);
	}
}
//3.Помошник для отрисовки
function renderLetterBlock(letters) {
	try {
		const LETTER_BLOCK = document.querySelector('#letter-block');
		LETTER_BLOCK.innerHTML = ``;
		letters
			.split('')
			.map((el, index) =>
				ARRAY_VOWELS.includes(el)
					? {
							letter: el,
							indexLetter: index,
					  }
					: null
			)
			.filter((el) => el)
			.forEach((el) => {
				LETTER_BLOCK.insertAdjacentHTML(
					'beforeend',
					`
        <button class="game__buttons-word" data-index="${el.indexLetter}">
          ${el.letter}
        </button>
		`
				);
			});
	} catch (error) {
		console.error(error);
	}
}
//4. Рендер кнопок
function renderArrowButton(state) {
	const BUTTON_CHANGE_WORD = Array.from(
		document.querySelectorAll('[data-change]')
	);

	if (state.indexWord === 0) {
		BUTTON_CHANGE_WORD[0].classList.add('disable');
		BUTTON_CHANGE_WORD[0].disabled = true;
	} else {
		BUTTON_CHANGE_WORD[0].classList.remove('disable');
		BUTTON_CHANGE_WORD[0].disabled = false;
	}

	if (state.indexWord === state.lvl.words.length) {
		BUTTON_CHANGE_WORD[1].classList.add('disable');
		BUTTON_CHANGE_WORD[1].disabled = true;
	} else {
		BUTTON_CHANGE_WORD[1].classList.remove('disable');
		BUTTON_CHANGE_WORD[1].disabled = false;
	}
}
//5. Рендер если все слова правильные
function renderIsEndLvl(state) {
	const wordsLength = state.lvl.words.length;
	const trueCountWordsInArray = state.lvl.words.filter(
		(word) => word.isAnswered
	).length;

	if (wordsLength === trueCountWordsInArray) {
		state.lvl.isEnd = true;
	}
}
//6. Рендер если все слова правильные для кнопок смены лвл
function renderIsAllWordsIsTrue(state) {
	if (state.lvl.isEnd) {
		const ArrayCountTrueAnswer = state.lvl.words.filter(
			(answer) => answer.isAnswered
		);

		if (ArrayCountTrueAnswer.length === state.lvl.words.length) {
			state.lvl.status = variableStatus.success;

			changeStates({
				type: 'status',
				state,
			});
		}
	}
}
//7. Рендер если этап завершен
function renderIsLvlIsComplete(state) {
	const MODAL = document.querySelector('#game_modal');

	if (state.indexWord === state.lvl.words.length) {
		MODAL.classList.add('active');

		if (state.lvl.once && state.isEnd) {
			MODAL.innerHTML = variableModalWritingResult.end.once;
			changeStates({
				state,
				type: 'change-once',
			});
		} else {
			MODAL.innerHTML = variableModalWritingResult.end.restart;
		}
	} else {
		MODAL.classList.remove('active');
	}
}
//8. Рендер если этап начинается
function renderIsLvlStart(state) {
	const MODAL = document.querySelector('#game_modal-2');
	if (state.lvl.once) {
		MODAL.classList.add('active');
		MODAL.innerHTML = variableModalWritingResult.stateGame.once[state.nameLvl];

		MODAL.addEventListener('click', () => {
			MODAL.classList.remove('active');
		});

		state.lvl.once = false;
	}
}
//9. Рендер если все этапы завершины
function renderIsAllLvlComplite(_, state) {
	const objArrayForValueState = Object.values(state);
	const isEndArray = objArrayForValueState.filter((elem) => elem.isEnd);
	const GAME_END_MODAL = document.querySelector('#game-end');

	if (objArrayForValueState.length === isEndArray.length) {
		setTimeout(() => {
			GAME_END_MODAL.classList.add('active');
		}, 1000);
	}
}

/// Функции при событий:

//1. Событие по проверки правильного ответа
function onClickForTrueAnswer(state, event) {
	try {
		const elem = event.currentTarget;

		const userSelectedId = elem.dataset.index;

		const wordInArray = state.lvl.words[state.indexWord];

		if (+wordInArray.trueWordIndex === +userSelectedId) {
			changeStates({
				userSelectId: userSelectedId,
				state,
			});

			elem.classList.add('success');

			elem.disabled = true;

			setTimeout(() => {
				gameStart(state);
			}, 1000);
		} else {
			elem.classList.add('error');

			setTimeout(() => {
				elem.classList.remove('error');
			}, 1000);
		}
	} catch (error) {
		console.error(error);
	}
}
//2. Событие по переключению слова
function onClickFromArrow(state, event) {
	const indexWord = state.indexWord;
	const elem = event.currentTarget;

	if (elem.dataset.change === 'next') {
		if (state.lvl.words[indexWord].isAnswered) {
			changeStates({
				type: 'next',
				state,
			});
			gameStart(state);
		} else {
			console.log('error');
		}
	} else {
		changeStates({
			type: 'last',
			state,
		});
		gameStart(state);
	}
}
//3. Cобытие по переключения уровня
function onClickFromChangeLvl(state, event) {
	const lvl = event.currentTarget.dataset.lvl;

	changeStates({
		type: 'change-lvl',
		lvl,
		state,
	});

	gameStart(state);
}

///Главный рендер
function renderGameFunction({ arrayFunction, state, stateGameOption }) {
	try {
		arrayFunction.forEach((elem) => {
			elem(state, stateGameOption);
		});
	} catch (error) {
		console.error(error);
	}
}

function gameStart(stateGame) {
	renderGameFunction({
		arrayFunction: [
			renderArrowButton,
			renderIsEndLvl,
			renderIsAllWordsIsTrue,
			renderButtonChangeLvl,
			renderDisplayGame,
			renderIsLvlIsComplete,
			renderIsLvlStart,
			renderIsAllLvlComplite,
		],
		state: stateGame,
		stateGameOption,
	});

	const BUTTON_CHANGE_LETTER = Array.from(
		document.querySelectorAll('[data-index]')
	);

	BUTTON_CHANGE_LETTER.forEach((button) => {
		button.addEventListener(
			'click',
			onClickForTrueAnswer.bind(null, stateGame)
		);
	});
}

const BUTTON_CHANGE_WORD = Array.from(
	document.querySelectorAll('[data-change]')
);

const BUTTON_CHANGE_LVL = Array.from(document.querySelectorAll('[data-lvl]'));

BUTTON_CHANGE_WORD.forEach((button) => {
	button.addEventListener('click', onClickFromArrow.bind(null, stateGame));
});

BUTTON_CHANGE_LVL.forEach((button) => {
	button.addEventListener('click', onClickFromChangeLvl.bind(null, stateGame));
});

gameStart(stateGame);
