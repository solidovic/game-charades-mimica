let words = [];
let wordsDefault = {
  [EN]: ["Apple", "Book", "Car", "Dog", "Elephant", "Flower", "Guitar", "House", "Ice"],
};

// Function to show the next word
function nextWord() {
  const randomIndex = Math.floor(Math.random() * (words.length - 1));
  document.getElementById('word').innerText = words[randomIndex];
}

// Function to start the game and switch to the word screen
function startGame() {
  document.getElementById('screen1').classList.remove('active');
  document.getElementById('screen2').classList.add('active');
  nextWord();
}

function fetchWords(lang) {
  let url = `./words/${lang.toLowerCase()}.json`;
  fetch(url)
    .then((response) => response.json())
    .then((_words) => {
      words = _words;
    });
}

// Attach event listeners to buttons
document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('next-word-button').addEventListener('click', nextWord);


document.addEventListener("DOMContentLoaded", (event) => {
  let lang = EN;

  words = wordsDefault[lang];
  fetchWords(lang);
});
