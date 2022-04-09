let nickname = prompt("Please, enter your name");
function username(){
  if (nickname != null){
    document.querySelector("#welc-messa").innerHTML = `Hello, ${nickname}. Let's play!`
  }
}

// window.onload = username();

function diceRoll(){
  let dice1 = Math.floor(Math.random()*6 +1);
  document.querySelector('#dice1').innerHTML = dice1; //adding the numbers inside the squares
  let dice2 = Math.floor(Math.random()*6 +1);
    document.querySelector('#dice2').innerHTML = dice2;
  let result = `${nickname}, you rolled a ${dice1} and a ${dice2}.`
  if (dice1 === 6 && dice2 === 6) {
    document.querySelector('#result-container').innerHTML = `${result} You won a bear!`;
  } else if (dice1 === dice2) {
    document.querySelector('#result-container').innerHTML = `${result} You won three more throws.`;
  } else if ((dice1+dice2) % 2 === 0) {
    document.querySelector('#result-container').innerHTML = `${result} Their sum is an even number so you win one free throw.`;
  } else {
    document.querySelector('#result-container').innerHTML = `${result}Sorry, you lost :(`;
  }
}

let diceBtn = document.querySelector('#dice-roll');
if (diceBtn){
  diceBtn.addEventListener('click', event => {
    diceRoll();
  });
}