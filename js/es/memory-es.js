document.addEventListener('DOMContentLoaded', () => {
/////cards/////
const cardsVillagers = [
  {
    name: 'bill',
    img: '../img/memory/bill.png'
  },
  {
    name: 'blanche',
    img: '../img/memory/blanche.png'
  },
  {
    name: 'bonbon',
    img: '../img/memory/bonbon.png'
  },
  {
    name: 'butch',
    img: '../img/memory/butch.png'
  },
  {
    name: 'cranston',
    img: '../img/memory/cranston.png'
  },
  {
    name: 'cube',
    img: '../img/memory/cube.png'
  },
  {
    name: 'bill',
    img: '../img/memory/bill.png'
  },
  {
    name: 'blanche',
    img: '../img/memory/blanche.png'
  },
  {
    name: 'bonbon',
    img: '../img/memory/bonbon.png'
  },
  {
    name: 'butch',
    img: '../img/memory/butch.png'
  },
  {
    name: 'cranston',
    img: '../img/memory/cranston.png'
  },
  {
    name: 'cube',
    img: '../img/memory/cube.png'
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
    card.setAttribute('src', '../img/memory/card-back.png');
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
    cards[optionOneId].setAttribute('src','../img/memory/card-back.png');
    cards[optionTwoId].setAttribute('src','../img/memory/card-back.png');
    if ('username' in localStorage){
      cheerText.innerHTML = `${userName}, has elegido la misma carta. ¡Eso es trampa!`;
    } else{
      cheerText.innerHTML = "Has elegido la misma carta. ¡Eso es trampa!";
    }
    setTimeout(clearCheer, 1200);
  } else if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].style.visibility = 'hidden';
    cards[optionTwoId].style.visibility = 'hidden';
    cardsWon.push(cardsChosen);
    if ('username' in localStorage){
      cheerText.innerHTML = `¡Toma ya, ${userName}! ¡Encontraste una pareja!`;
    } else{
      cheerText.innerHTML = '¡Encontraste una pareja! ¡Sigue así!';
    }
    setTimeout(clearCheer, 1200);
  }else {
    cards[optionOneId].setAttribute('src','../img/memory/card-back.png');
    cards[optionTwoId].setAttribute('src','../img/memory/card-back.png');
    if ('username' in localStorage){
      cheerText.innerHTML = `Eh... ¿seguro que estás mirando, ${userName}?`;
    } else{
      cheerText.innerHTML = 'La memoria no es lo tuyo. ¡Sigue practicando!';
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
    finalCheer.innerHTML = `Recórcholis, ${userName}! ¡Has conseguido todas las selfies! ¡Invítanos a tu casa pronto!`;
  } else{
    finalCheer.innerHTML = '¡Recórcholis! ¡Has conseguido todas las selfies! ¡Invítanos a tu casa pronto!';
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
    e.setAttribute('src', '../img/memory/card-back.png');
  });
}

createBoard();
})