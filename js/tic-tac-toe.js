document.addEventListener('DOMContentLoaded', () => {

let squaresArray = ['','','','','','','','',''];


let grid = document.querySelector('.grid');
let chosenToeId = [];
let imgId = [];
// let turn = 'user';
let takenId = [];
let computerChoices = [];
let userChoices = [];

////////////creating the board///////////
function ticTacBoard (){
  for (let i = 0; i < squaresArray.length; i++){
    let gridElements = document.createElement('div');
    let gridImg = document.createElement('img');
    grid.appendChild(gridElements);
    gridElements.appendChild(gridImg);
    gridElements.setAttribute('class', 'square-style');
    gridImg.setAttribute('data-id', i);
    imgId.push(i);
    gridImg.setAttribute('src', 'img/tic-tac-toe/toe.png');
    gridImg.addEventListener('click', leaveMark);
  }
}

////user's mark////
function leaveMark(){
  let toes = document.querySelectorAll('img');
  let toesId = this.getAttribute('data-id');
  chosenToeId.push(toesId);
  takenId.push(toesId);
  userChoices.push(toesId);
  let chosenToe = chosenToeId[0];
  toes[chosenToe].setAttribute('src','img/tic-tac-toe/hammer.png');
  chosenToeId = [];
  handleResultValidation();
  setTimeout(computerTurn, 1000);
}

/////turns////////

function computerTurn(){
  let randomId = Math.floor((Math.random()*imgId.length));
  let randomIdString = randomId.toString();
  console.log(randomIdString);
  console.log(typeof randomIdString);
  let toes = document.querySelectorAll('img');
  if (!takenId.includes(randomIdString)){
    toes[randomId].setAttribute('src','img/tic-tac-toe/boots.png');
    takenId.push(randomIdString);
    computerChoices.push(randomId);
  } else if (takenId.length === imgId.length){
    
  } else{
      computerTurn();
    }
    handleResultValidation();
  }

///////////win logic////////
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], 
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
  ];

// function findWinner(){
//   let numberUser = userChoices.map(i=>Number(i));
//   winningCombos.forEach((e) =>{
//     if (e.includes(numberUser)){
//       console.log('hello');
//     }
//     console.log(e);
//     console.log(numberUser);
//   });
// }

function handleResultValidation() {
  let numberUser = userChoices.map(i=>Number(i));
  winningCombos.forEach((e) =>{
    let a = e[0];
    let b = e[1];
    let c = e[2];
    if (numberUser.includes(a) && numberUser.includes(b) && numberUser.includes(c)){ 
      console.log('user wins');
    }
  })
  console.log('number user', numberUser);
      // if (numberUser.includes(0) && numberUser.includes(1) && numberUser.includes(2) || numberUser.includes(3) && numberUser.includes(4) && numberUser.includes(5)){
      //         console.log('user wins');
              
      //       }
}

// || (3 && 4 && 5) || (6 && 7 && 8) || (0 && 3 && 6) || (1 && 4 && 7) || (2 && 5 && 8) || (0 && 4 && 8) || (2 && 4 && 6)
//////message//////

let messages = document.querySelector('#result-container');

///reset button////

let resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', resetFunction);
function resetFunction(){
  let allCells = document.querySelectorAll('img');
  let arrayCells = Array.from(allCells);
  arrayCells.forEach((e) =>{e.setAttribute('src', 'img/tic-tac-toe/toe.png')});
  takenId = [];
  computerChoices = [];
  userChoices = [];
}



ticTacBoard();



























})