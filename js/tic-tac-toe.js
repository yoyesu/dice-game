document.addEventListener('DOMContentLoaded', () => {

let squaresArray = ['','','','','','','','',''];


let grid = document.querySelector('.grid');
let chosenToeId = [];
let imgId = [];
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
  userValidation();
}

/////computer turn////////

function computerTurn(){
  let randomId = Math.floor((Math.random()*imgId.length));
  let randomIdString = randomId.toString();
  let toes = document.querySelectorAll('img');
  if (!takenId.includes(randomIdString)){
    toes[randomId].setAttribute('src','img/tic-tac-toe/boots.png');
    takenId.push(randomIdString);
    computerChoices.push(randomId);
  } else{
      computerTurn();
    }
    computerValidation();
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

function userValidation() {
  let nextTurn = setTimeout(computerTurn, 1200);
  let noNextTurnMessage = setTimeout(slowComputerTurnMessages, 500);
  let numberUser = userChoices.map(i=>Number(i));
  winningCombos.forEach((e) =>{
    let a = e[0];
    let b = e[1];
    let c = e[2];

    if (numberUser.includes(a) && numberUser.includes(b) && numberUser.includes(c)){ 
      if ('username' in localStorage){
        messages.innerHTML = `You won, ${userName} :( did you have fun hurting my toes? Shame on you and your cow`;
      } else{
        messages.innerHTML = 'You won :( did you have fun hurting my toes? Shame on you and your cow';
      }
      clearTimeout(nextTurn);
      clearTimeout(noNextTurnMessage);
      
    } else if ((takenId.length === imgId.length) && (!numberUser.includes(a) && !numberUser.includes(b) && !numberUser.includes(c))){
      if ('username' in localStorage){
        messages.innerHTML = `A tie! That was a good game, ${userName}. You're smarter than I thought.`;
      } else{
        messages.innerHTML = "A tie! That was a good game. You're smarter than I thought.";
      }
      clearTimeout(nextTurn);
      clearTimeout(noNextTurnMessage);
    } 
  })
  console.log(numberUser);
}

  function computerValidation() {
    let noShowMessage = setTimeout(slowNextTurnMessages, 700);
    let numberComputer = computerChoices.map(i=>Number(i));
    winningCombos.forEach((e) =>{
      let a = e[0];
      let b = e[1];
      let c = e[2];
      if (numberComputer.includes(a) && numberComputer.includes(b) && numberComputer.includes(c)){
        if ('username' in localStorage){
          messages.innerHTML = `Take that, ${userName}! My toes are safe!`;
        } else{
          messages.innerHTML = "Take that! My toes are safe!";
        }
        clearTimeout(noShowMessage);
      } else if (takenId.length === imgId.length){
        if ('username' in localStorage){
          messages.innerHTML = `A tie! That was a good game, ${userName}. You're smarter than I thought.`;
        } else{
          messages.innerHTML = "A tie! That was a good game. You're smarter than I thought.";
        }
        clearTimeout(noShowMessage);
      } 
    });
  };

//////message//////
let userName = storedName;
let messages = document.querySelector('#result-container');

function slowNextTurnMessages () {
  if ('username' in localStorage){
    messages.innerHTML = `Show me what you've got, ${userName}! `;
  } else{
    messages.innerHTML = "Show me what you've got.";
  }
}

function slowComputerTurnMessages () {
  messages.innerHTML = 'Not bad, my turn.'
}
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
  messages.innerHTML = '';
};



ticTacBoard();


})