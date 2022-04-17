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


function checkMatch(){
  let cards = document.querySelectorAll('img');
  let optionOneId = cardsChosenId[0];
  let optionTwoId = cardsChosenId[1];
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src','img/memory/card-back.png');
    cards[optionTwoId].setAttribute('src','img/memory/card-back.png');
    document.querySelector('#result-container').innerHTML = 'You clicked the same card.';
  } else if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].style.visibility = 'hidden';
    cards[optionTwoId].style.visibility = 'hidden';
    cardsWon.push(cardsChosen);
    document.querySelector('#result-container').innerHTML = 'You found a match! Nice, keep going!';
  }else {
    cards[optionOneId].setAttribute('src','img/memory/card-back.png');
    cards[optionTwoId].setAttribute('src','img/memory/card-back.png');
    document.querySelector('#result-container').innerHTML = 'Sorry, try again.';
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardsVillagers.length/2){
    document.querySelector('#result-container').innerHTML = 'Congratulations! You won! ';
    resetBtn.removeAttribute('class', 'hidden');
  }
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
resetBtn.addEventListener('click', resetGame);
function resetGame (){
  resetBtn.setAttribute('class', 'hidden');
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