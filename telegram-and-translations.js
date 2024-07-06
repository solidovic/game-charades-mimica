const RU = 'RU';
const EN = 'EN';

const START_GAME = {
  [RU]: 'Начать игру',
  [EN]: 'Start Game',
};

const NEXT_WORD = {
  [RU]: 'Следующее слово',
  [EN]: 'Next word',
};

const RULES_OF_THE_GAME = {
  [RU]: 'Правила игры',
  [EN]: 'Rules of the game',
};

const RULES_TEXT1 = {
  [RU]: 'Соберитесь компанией от 3-х человек.',
  [EN]: 'Gather in a group of at least 3 people.',
};

const RULES_TEXT2 = {
  [RU]: 'Один из игроков должен показать загаданное слово, используя только жесты, мимику и позы.',
  [EN]: 'One of the players must show the word using only gestures, facial expressions, and postures.',
};

const RULES_TEXT3 = {
  [RU]: 'Запрещается издавать звуки или показывать слово по буквам.',
  [EN]: 'It is forbidden to make sounds or spell the word.',
};


document.addEventListener("DOMContentLoaded", (event) => {
  let lang = EN;

  // Translations
  document.getElementById('start-button').textContent=START_GAME[lang];
  document.getElementById('lng-rules-title').textContent=RULES_OF_THE_GAME[lang];
  document.getElementById('lng-rules-text1').textContent=RULES_TEXT1[lang];
  document.getElementById('lng-rules-text2').textContent=RULES_TEXT2[lang];
  document.getElementById('lng-rules-text3').textContent=RULES_TEXT3[lang];
  document.getElementById('next-word-button').innerHTML=NEXT_WORD[lang];

  // Expand Mini App
  setInterval(() => {
    if (!window.Telegram.WebApp.isExpanded) {
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    }
  }, 100);
});
