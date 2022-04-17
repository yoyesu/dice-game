const letterDiv = document.querySelector('.letter-div');
const hintButton = document.querySelector('.hint-btn');
const resetButton = document.querySelector('.reset-btn');
const hintDiv = document.querySelector('.hint-div');
const hintText = document.querySelector('.hint-txt');
const liveSpan = document.querySelector('.lives');
const wordDiv = document.querySelector('.word-div');
const notif = document.querySelector('.notif');
const notifContent = document.querySelector('.notif-content');
const notifSpan = document.querySelector('.notif-span');
const playAgain = document.querySelector('.notif-btn');

let letters;
let lives;

const words = new Map([
  ['United Kingdom', 'long live the Queen'],
  ['Spain', 'paella'], // [key, value]
  ['France', 'croissant']
]);

///this is to make a list of all the keys of the map
const wordList = [...words.keys()];

///get random word from our list of keys (const wordlist)
const getRandomWord = function (list) {
  return list[Math.floor(Math.random() * wordList.length)];
};

let selectedWord;

const startGame = function (state){
  wordDiv.innerHTML = '';
  if (state === 'start'){
    for (const i of 'abcdefghijklmnopqrstuvwxyz') {
      const html = `<button class="alpha">${i.toUpperCase()}</button>`;
      letterDiv.insertAdjacentHTML('beforeend', html);
    }
  } else if (state === 'reset') {
    letters.forEach(btn => {
      btn.classList.remove('disabled');
      hintDiv.classList.add('hidden');
      notif.classList.add('hidden');
    });
  }
}

selectedWord = getRandomWord(wordList);
lives = 5;