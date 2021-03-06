document.addEventListener('DOMContentLoaded', () => {
/////cards/////
const cardsVillagers = [
  {
    name: 'bill',
    img: 'img/memory/bill.png'
  },
  {
    name: 'blanche',
    img: 'img/memory/blanche.png'
  },
  {
    name: 'bonbon',
    img: 'img/memory/bonbon.png'
  },
  {
    name: 'butch',
    img: 'img/memory/butch.png'
  },
  {
    name: 'cranston',
    img: 'img/memory/cranston.png'
  },
  {
    name: 'cube',
    img: 'img/memory/cube.png'
  },
  {
    name: 'bill',
    img: 'img/memory/bill.png'
  },
  {
    name: 'blanche',
    img: 'img/memory/blanche.png'
  },
  {
    name: 'bonbon',
    img: 'img/memory/bonbon.png'
  },
  {
    name: 'butch',
    img: 'img/memory/butch.png'
  },
  {
    name: 'cranston',
    img: 'img/memory/cranston.png'
  },
  {
    name: 'cube',
    img: 'img/memory/cube.png'
  },
]

cardsVillagers.sort(() => 0.5 - Math.random());

let grid = document.querySelector('.grid');
let resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

/////board///////
function createBoard(){
  for (let i = 0; i < cardsVillagers.length; i++){
    let card = document.createElement('img');
    card.setAttribute('src', 'img/memory/card-back.png');
    card.setAttribute('data-id', i);
    card.setAttribute('class', 'card-border');
    card.addEventListener('click', flipCard);
    grid.appendChild(card);
  }
}

/////check for matches//////
let userName = storedName;
let cheerText = document.querySelector('#result-container');
let finalCheer = document.querySelector('#result-container2');

function checkMatch(){
  let cards = document.querySelectorAll('img');
  let optionOneId = cardsChosenId[0];
  let optionTwoId = cardsChosenId[1];
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src','img/memory/card-back.png');
    cards[optionTwoId].setAttribute('src','img/memory/card-back.png');
    if ('username' in localStorage){
      cheerText.innerHTML = `${userName}, you picked the same card. Don't cheat!`;
    } else{
      cheerText.innerHTML = "You picked the same card. Don't cheat!";
    }
    setTimeout(clearCheer, 1200);
  } else if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].style.visibility = 'hidden';
    cards[optionTwoId].style.visibility = 'hidden';
    cardsWon.push(cardsChosen);
    if ('username' in localStorage){
      cheerText.innerHTML = `Nice, ${userName}! You found a match!`;
    } else{
      cheerText.innerHTML = 'You found a match! Nice, keep going!';
    }
    setTimeout(clearCheer, 1200);
  }else {
    cards[optionOneId].setAttribute('src','img/memory/card-back.png');
    cards[optionTwoId].setAttribute('src','img/memory/card-back.png');
    if ('username' in localStorage){
      cheerText.innerHTML = `Uh... you sure you can find them all, ${userName}?`;
    } else{
      cheerText.innerHTML = 'Your memory game is weak. Keep practicing!';
    }
    setTimeout(clearCheer, 1200);
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardsVillagers.length/2){
    setTimeout(slowFinalCheer, 1210);
    
  }
}

//////clear cheer text after a second////////
function clearCheer (){
  cheerText.innerHTML = '';
}

function slowFinalCheer () {
  if ('username' in localStorage){
    finalCheer.innerHTML = `What a star, ${userName}! You found all of our selfies! Invite us over to your place soon!`;
  } else{
    finalCheer.innerHTML = 'What a star! You found all of our selfies! Invite us over to your place soon!';
  }
  finalPopup.removeAttribute('class', 'hidden');
}
///////flip cards///////////
function flipCard(){
  let cardId = this.getAttribute('data-id');
  cardsChosen.push(cardsVillagers[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute('src', cardsVillagers[cardId].img);
  if (cardsChosen.length === 2){
    setTimeout(checkMatch, 700);
  }
}


//////////reset btn///////
let resetBtn = document.querySelector('#reset-btn');
let finalPopup = document.querySelector('#final-popup');
resetBtn.addEventListener('click', resetGame);
function resetGame (){
  finalPopup.setAttribute('class', 'hidden');
  cardsWon = [];
  cardsVillagers.sort(() => 0.5 - Math.random());
  let allCells = document.querySelectorAll('img');
  let arrayCells = Array.from(allCells);
  arrayCells.forEach((e) =>{
    e.style.visibility = 'visible';
    e.setAttribute('src', 'img/memory/card-back.png');
  });
}

createBoard();
})