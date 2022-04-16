document.addEventListener('DOMContentLoaded', () => {

let squaresArray = ['','','','','','','','',''];


let grid = document.querySelector('.grid');
let chosenToeId = [];
let imgId = [];
let turn = 'user';
let takenId = [];

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
  let chosenToe = chosenToeId[0];
  toes[chosenToe].setAttribute('src','img/tic-tac-toe/hammer.png');
  chosenToeId = [];
  setTimeout(computerTurn, 1000);
}

/////turns////////
// function render() {
//   squaresArray.forEach(function(mark, index){
//   console.log(mark, index);
//   });
//   };
// squaresArray[leaveMark] = turn;

function computerTurn(){
  var randomId = Math.floor((Math.random()*imgId.length));
  let randomIdString = randomId.toString();
  console.log(randomIdString);
  console.log(typeof randomIdString);
  let toes = document.querySelectorAll('img');
  if (!takenId.includes(randomIdString)){
    toes[randomId].setAttribute('src','img/tic-tac-toe/boots.png');
    takenId.push(randomIdString);
  } else {
    var randomId = Math.floor((Math.random()*imgId.length));
  }
}

console.log(takenId);


ticTacBoard();



























})