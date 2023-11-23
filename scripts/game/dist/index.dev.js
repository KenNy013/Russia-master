"use strict";

var variableStatus = {
  available: 'available',
  unavailable: 'unavailable',
  success: 'success'
};
var variableResultWritting = {
  isEndLvl: "\n\t\t<div>\n\t\t\t<h2>\u0423\u0441\u043F\u0435\u0448\u043D\u043E</h2>\n\t\t\t<p>\u041F\u0435\u0440\u0435\u0445\u043E\u0434\u0438 \u043A \u0434\u0440\u0443\u0433\u043E\u043C\u0443 \u0443\u0440\u043E\u0432\u043D\u044E</p>\n\t\t</div>\n\n\t"
};
var variableModalWritingResult = {
  end: {
    once: "\n\t\t\t<div class=\"modal__wrapper\">\n\t\t\t\t<h2>\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u044E \u0442\u044B \u043F\u0440\u043E\u0448\u0435\u043B \u044D\u0442\u0430\u043F</h2>\n\t\t\t\t<p>\n\t\t\t\t\t\u041F\u0435\u0440\u0435\u0445\u043E\u0434\u0438 \u043A \u0434\u0440\u0443\u0433\u043E\u043C\u0443 \u0443\u0440\u043E\u0432\u043D\u044E\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t",
    restart: "\n\t\t<div class=\"modal__wrapper\">\n\t\t\t<h2>\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u044E \u0442\u044B \u0437\u0430\u043D\u043E\u0432\u043E \u043F\u0440\u043E\u0448\u0435\u043B \u044D\u0442\u0430\u043F</h2>\n\t\t\t<p>\n\t\t\t\t\u041F\u0435\u0440\u0435\u0445\u043E\u0434\u0438 \u043A \u0434\u0440\u0443\u0433\u043E\u043C\u0443 \u0443\u0440\u043E\u0432\u043D\u044E\n\t\t\t</p>\n\t\t</div>\n\t"
  },
  stateGame: {
    once: {
      ONE_LVL: "\n\t\t\t<div class=\"modal__wrapper\">\n\t\t\t\t<h2>\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432 \u043C\u0438\u0440 \u0443\u0434\u0430\u0440\u0435\u043D\u0438\u0439</h2>\n\t\t\t\t<p>\n\t\t\t\t\u041D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u044D\u0442\u0430\u043F\u0435 \u0438\u0433\u0440\u044B \"\u041C\u0430\u0441\u0442\u0435\u0440 \u0443\u0434\u0430\u0440\u0435\u043D\u0438\u0439: \u0418\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435 \u0437\u0432\u0443\u043A\u043E\u0432\" \u0433\u0435\u0440\u043E\u0439 \u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u0441\u044F \u0441 \u043E\u0441\u043D\u043E\u0432\u0430\u043C\u0438 \u0443\u0434\u0430\u0440\u0435\u043D\u0438\u0439. \u0417\u0434\u0435\u0441\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u043F\u0440\u043E\u0441\u0442\u044B\u0435 \u0441\u043B\u043E\u0432\u0430, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C, \u043D\u0430 \u043A\u0430\u043A\u0443\u044E \u0431\u0443\u043A\u0432\u0443 \u043F\u0430\u0434\u0430\u0435\u0442 \u0443\u0434\u0430\u0440\u0435\u043D\u0438\u0435. \n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t",
      TWO_LVL: "\n\t\t\t<div class=\"modal__wrapper\">\n\t\t\t\t<h2>\u0423\u0433\u043B\u0443\u0431\u043B\u0435\u043D\u0438\u0435 \u0432 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438</h2>\n\t\t\t\t<p>\n\t\t\t\t\u041D\u0430 \u0432\u0442\u043E\u0440\u043E\u043C \u044D\u0442\u0430\u043F\u0435 \u0438\u0433\u0440\u044B \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442 \u043F\u043E\u0432\u044B\u0448\u0430\u0442\u044C\u0441\u044F. \u0417\u0434\u0435\u0441\u044C \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u044E\u0442\u0441\u044F \u0441\u043B\u043E\u0432\u0430 \u0441 \u0431\u043E\u043B\u0435\u0435 \u0441\u043B\u043E\u0436\u043D\u044B\u043C\u0438 \u0443\u0434\u0430\u0440\u0435\u043D\u0438\u044F\u043C\u0438, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0441\u043B\u043E\u0432\u0430 \u0441 \u043F\u0440\u0438\u0441\u0442\u0430\u0432\u043A\u0430\u043C\u0438, \u0441\u0443\u0444\u0444\u0438\u043A\u0441\u0430\u043C\u0438 \u0438 \u043D\u0435\u043E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u044B\u043C\u0438 \u0443\u0434\u0430\u0440\u0435\u043D\u0438\u044F\u043C\u0438. \u0418\u0433\u0440\u043E\u043A\u0443 \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u0438\u0442 \u043F\u0440\u043E\u044F\u0432\u0438\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0438 \u0443\u043C\u0435\u043D\u0438\u0435 \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0441\u043B\u043E\u0432\u0430, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0435 \u0443\u0434\u0430\u0440\u0435\u043D\u0438\u0435.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t",
      THREE_LVL: "\n\t\t\t<div class=\"modal__wrapper\">\n\t\t\t\t<h2>\u0418\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430</h2>\n\t\t\t\t<p>\n\t\t\t\t\u0422\u0440\u0435\u0442\u0438\u0439 \u044D\u0442\u0430\u043F \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0441\u043B\u043E\u0436\u043D\u044B\u043C \u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043E\u0442 \u0438\u0433\u0440\u043E\u043A\u0430 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u044F \u0443\u0434\u0430\u0440\u0435\u043D\u0438\u044F\u043C\u0438. \u0417\u0434\u0435\u0441\u044C \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u044E\u0442\u0441\u044F \u0441\u043B\u043E\u0432\u0430 \u0441 \u0440\u0435\u0434\u043A\u0438\u043C\u0438 \u0438 \u043D\u0435\u043E\u0431\u044B\u0447\u043D\u044B\u043C\u0438 \u0443\u0434\u0430\u0440\u0435\u043D\u0438\u044F\u043C\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043B\u043E\u0432\u0430 \u0441 \u0443\u0434\u0430\u0440\u0435\u043D\u0438\u044F\u043C\u0438 \u043D\u0430 \u043D\u0435\u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u043B\u043E\u0433\u0430\u0445. \u0418\u0433\u0440\u043E\u043A\u0443 \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u0438\u0442 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u043D\u0430\u0432\u044B\u043A\u0438 \u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0442\u044C \u0432\u0441\u0435 \u0441\u0432\u043E\u0438 \u0437\u043D\u0430\u043D\u0438\u044F \u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u0445 \u0443\u0434\u0430\u0440\u0435\u043D\u0438\u0439. \n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t",
      FOUR_LVL: "\n\t\t\t<div class=\"modal__wrapper\">\n\t\t\t\t<h2>\u0412\u0435\u043B\u0438\u043A\u043E\u0435 \u0444\u0438\u043D\u0430\u043B\u0435 \u0438 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F</h2>\n\t\t\t\t<p>\n\t\t\t\t\u041D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u043C \u044D\u0442\u0430\u043F\u0435 \u0438\u0433\u0440\u043E\u043A \u0441\u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u0441\u0435 \u0441\u0432\u043E\u0438 \u043D\u0430\u0432\u044B\u043A\u0438 \u0438 \u0437\u043D\u0430\u043D\u0438\u044F, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u044F\u0432\u0438\u0442\u044C \u0441\u0435\u0431\u044F \u043A\u0430\u043A \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u041C\u0430\u0441\u0442\u0435\u0440 \u0423\u0434\u0430\u0440\u0435\u043D\u0438\u0439. \u0417\u0434\u0435\u0441\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0441\u0430\u043C\u044B\u0435 \u0441\u043B\u043E\u0436\u043D\u044B\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u044F, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0438\u0435 \u0441\u043B\u043E\u0432\u0430 \u0441 \u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F\u043C\u0438, \u0441\u043B\u043E\u0436\u043D\u044B\u043C\u0438 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u044F\u043C\u0438 \u0443\u0434\u0430\u0440\u0435\u043D\u0438\u0439 \u0438 \u0440\u0435\u0434\u043A\u0438\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438. \u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435 \u044D\u0442\u043E\u0433\u043E \u044D\u0442\u0430\u043F\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0438\u0433\u0440\u043E\u043A\u0443 \u0441\u0442\u0430\u0442\u044C \u0438\u0441\u0442\u0438\u043D\u043D\u044B\u043C \u041C\u0430\u0441\u0442\u0435\u0440\u043E\u043C \u0423\u0434\u0430\u0440\u0435\u043D\u0438\u0439 \n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t"
    }
  }
};
var ARRAY_VOWELS = ['а', 'о', 'у', 'ы', 'э', 'е', 'ё', 'и', 'ю', 'я'];
var stateGameOption = {
  ONE_LVL: {
    nameLvl: '1',
    status: variableStatus.available,
    once: true,
    isEnd: false,
    words: [{
      id: 0,
      viewText: 'Звонит',
      trueWordIndex: 4,
      isAnswered: false
    }, {
      id: 1,
      viewText: 'Досуг',
      trueWordIndex: 3,
      isAnswered: false
    }, {
      id: 2,
      viewText: 'Торты',
      trueWordIndex: 1,
      isAnswered: false
    }, {
      id: 3,
      viewText: 'Свёкла',
      trueWordIndex: 2,
      isAnswered: false
    }, {
      id: 4,
      viewText: 'Бармен',
      trueWordIndex: 1,
      isAnswered: false
    }]
  },
  TWO_LVL: {
    nameLvl: '2',
    once: true,
    isEnd: false,
    status: variableStatus.unavailable,
    words: [{
      id: 0,
      viewText: 'Жалюзи',
      trueWordIndex: 5,
      isAnswered: false
    }, {
      id: 1,
      viewText: 'Каталог',
      trueWordIndex: 5,
      isAnswered: false
    }, {
      id: 2,
      viewText: 'Маркетинг',
      trueWordIndex: 1,
      isAnswered: false
    }, {
      id: 3,
      viewText: 'Туфля',
      trueWordIndex: 1,
      isAnswered: false
    }, {
      id: 4,
      viewText: 'Древко',
      trueWordIndex: 2,
      isAnswered: false
    }]
  },
  THREE_LVL: {
    nameLvl: '3',
    once: true,
    isEnd: false,
    status: variableStatus.unavailable,
    words: [{
      id: 0,
      viewText: 'кухонный',
      trueWordIndex: 1,
      isAnswered: false
    }, {
      id: 1,
      viewText: 'Ходатайство',
      trueWordIndex: 3,
      isAnswered: false
    }, {
      id: 2,
      viewText: 'Сливовый',
      trueWordIndex: 2,
      isAnswered: false
    }, {
      id: 3,
      viewText: 'Иконопись',
      trueWordIndex: 0,
      isAnswered: false
    }, {
      id: 4,
      viewText: 'Камбала',
      trueWordIndex: 1,
      isAnswered: false
    }]
  },
  FOUR_LVL: {
    nameLvl: '4',
    once: true,
    isEnd: false,
    status: variableStatus.unavailable,
    words: [{
      id: 0,
      viewText: 'Еретик',
      trueWordIndex: 4,
      isAnswered: false
    }, {
      id: 1,
      viewText: 'Мельком',
      trueWordIndex: 1,
      isAnswered: false
    }, {
      id: 2,
      viewText: 'Генезис',
      trueWordIndex: 1,
      isAnswered: false
    }, {
      id: 3,
      viewText: 'Асбест',
      trueWordIndex: 3,
      isAnswered: false
    }, {
      id: 4,
      viewText: 'Фалафель',
      trueWordIndex: 3,
      isAnswered: false
    }]
  }
};
var stateGame = {
  nameLvl: 'ONE_LVL',
  indexWord: 0,
  lvl: stateGameOption['ONE_LVL']
}; ///Логика игры
// Изменение состояния

function changeStates(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'answer' : _ref$type,
      state = _ref.state,
      lvl = _ref.lvl;

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
} /// Рендеры
//1.Проверка:


function renderButtonChangeLvl() {
  try {
    var _BUTTON_CHANGE_LVL = Array.from(document.querySelectorAll('[data-lvl]'));

    _BUTTON_CHANGE_LVL.forEach(function (lvl) {
      if (stateGameOption[lvl.dataset.lvl].status === variableStatus.available) {
        lvl.classList.remove('disable');
        lvl.disabled = false;
      }

      if (stateGameOption[lvl.dataset.lvl].status === variableStatus.unavailable) {
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
} //2.Отрисовка дисплея игры:


function renderDisplayGame(state) {
  try {
    var WORD_VIEW = document.querySelector('#game-word');
    var indexWord = state.indexWord;
    state.lvl.words.forEach(function (word, index) {
      if (index === indexWord) {
        WORD_VIEW.innerHTML = word.viewText;
        renderLetterBlock(word.viewText);
      }
    });
  } catch (error) {
    console.error(error);
  }
} //3.Помошник для отрисовки


function renderLetterBlock(letters) {
  try {
    var LETTER_BLOCK = document.querySelector('#letter-block');
    LETTER_BLOCK.innerHTML = "";
    letters.split('').map(function (el, index) {
      return ARRAY_VOWELS.includes(el) ? {
        letter: el,
        indexLetter: index
      } : null;
    }).filter(function (el) {
      return el;
    }).forEach(function (el) {
      LETTER_BLOCK.insertAdjacentHTML('beforeend', "\n        <button class=\"game__buttons-word\" data-index=\"".concat(el.indexLetter, "\">\n          ").concat(el.letter, "\n        </button>\n\t\t"));
    });
  } catch (error) {
    console.error(error);
  }
} //4. Рендер кнопок


function renderArrowButton(state) {
  var BUTTON_CHANGE_WORD = Array.from(document.querySelectorAll('[data-change]'));

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
} //5. Рендер если все слова правильные


function renderIsEndLvl(state) {
  var wordsLength = state.lvl.words.length;
  var trueCountWordsInArray = state.lvl.words.filter(function (word) {
    return word.isAnswered;
  }).length;

  if (wordsLength === trueCountWordsInArray) {
    state.lvl.isEnd = true;
  }
} //6. Рендер если все слова правильные для кнопок смены лвл


function renderIsAllWordsIsTrue(state) {
  if (state.lvl.isEnd) {
    var ArrayCountTrueAnswer = state.lvl.words.filter(function (answer) {
      return answer.isAnswered;
    });

    if (ArrayCountTrueAnswer.length === state.lvl.words.length) {
      state.lvl.status = variableStatus.success;
      changeStates({
        type: 'status',
        state: state
      });
    }
  }
} //7. Рендер если этап завершен


function renderIsLvlIsComplete(state) {
  var MODAL = document.querySelector('#game_modal');

  if (state.indexWord === state.lvl.words.length) {
    MODAL.classList.add('active');

    if (state.lvl.once && state.isEnd) {
      MODAL.innerHTML = variableModalWritingResult.end.once;
      changeStates({
        state: state,
        type: 'change-once'
      });
    } else {
      MODAL.innerHTML = variableModalWritingResult.end.restart;
    }
  } else {
    MODAL.classList.remove('active');
  }
} //8. Рендер если этап начинается


function renderIsLvlStart(state) {
  var MODAL = document.querySelector('#game_modal-2');

  if (state.lvl.once) {
    MODAL.classList.add('active');
    MODAL.innerHTML = variableModalWritingResult.stateGame.once[state.nameLvl];
    MODAL.addEventListener('click', function () {
      MODAL.classList.remove('active');
    });
    state.lvl.once = false;
  }
} //9. Рендер если все этапы завершины


function renderIsAllLvlComplite(_, state) {
  var objArrayForValueState = Object.values(state);
  var isEndArray = objArrayForValueState.filter(function (elem) {
    return elem.isEnd;
  });
  var GAME_END_MODAL = document.querySelector('#game-end');

  if (objArrayForValueState.length === isEndArray.length) {
    setTimeout(function () {
      GAME_END_MODAL.classList.add('active');
    }, 1000);
  }
} /// Функции при событий:
//1. Событие по проверки правильного ответа


function onClickForTrueAnswer(state, event) {
  try {
    var elem = event.currentTarget;
    var userSelectedId = elem.dataset.index;
    var wordInArray = state.lvl.words[state.indexWord];

    if (+wordInArray.trueWordIndex === +userSelectedId) {
      changeStates({
        userSelectId: userSelectedId,
        state: state
      });
      elem.classList.add('success');
      elem.disabled = true;
      setTimeout(function () {
        gameStart(state);
      }, 1000);
    } else {
      elem.classList.add('error');
      setTimeout(function () {
        elem.classList.remove('error');
      }, 1000);
    }
  } catch (error) {
    console.error(error);
  }
} //2. Событие по переключению слова


function onClickFromArrow(state, event) {
  var indexWord = state.indexWord;
  var elem = event.currentTarget;

  if (elem.dataset.change === 'next') {
    if (state.lvl.words[indexWord].isAnswered) {
      changeStates({
        type: 'next',
        state: state
      });
      gameStart(state);
    } else {
      console.log('error');
    }
  } else {
    changeStates({
      type: 'last',
      state: state
    });
    gameStart(state);
  }
} //3. Cобытие по переключения уровня


function onClickFromChangeLvl(state, event) {
  var lvl = event.currentTarget.dataset.lvl;
  changeStates({
    type: 'change-lvl',
    lvl: lvl,
    state: state
  });
  gameStart(state);
} ///Главный рендер


function renderGameFunction(_ref2) {
  var arrayFunction = _ref2.arrayFunction,
      state = _ref2.state,
      stateGameOption = _ref2.stateGameOption;

  try {
    arrayFunction.forEach(function (elem) {
      elem(state, stateGameOption);
    });
  } catch (error) {
    console.error(error);
  }
}

function gameStart(stateGame) {
  renderGameFunction({
    arrayFunction: [renderArrowButton, renderIsEndLvl, renderIsAllWordsIsTrue, renderButtonChangeLvl, renderDisplayGame, renderIsLvlIsComplete, renderIsLvlStart, renderIsAllLvlComplite],
    state: stateGame,
    stateGameOption: stateGameOption
  });
  var BUTTON_CHANGE_LETTER = Array.from(document.querySelectorAll('[data-index]'));
  BUTTON_CHANGE_LETTER.forEach(function (button) {
    button.addEventListener('click', onClickForTrueAnswer.bind(null, stateGame));
  });
}

var BUTTON_CHANGE_WORD = Array.from(document.querySelectorAll('[data-change]'));
var BUTTON_CHANGE_LVL = Array.from(document.querySelectorAll('[data-lvl]'));
BUTTON_CHANGE_WORD.forEach(function (button) {
  button.addEventListener('click', onClickFromArrow.bind(null, stateGame));
});
BUTTON_CHANGE_LVL.forEach(function (button) {
  button.addEventListener('click', onClickFromChangeLvl.bind(null, stateGame));
});
gameStart(stateGame);