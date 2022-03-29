function diceRoll(){
  let dice1 = Math.floor(Math.random()*6);
    document.getElementById('dice1').innerHTML = dice1;
  let dice2 = Math.floor(Math.random()*6);
    document.getElementById('dice2').innerHTML = dice2;
  if (dice1 === 6 && dice2 === 6) {
    document.getElementById('result-container').innerHTML = `First dice rolled ${dice1} and dice 2 also rolled ${dice2}. You won a bear!`;
  } else if (dice1 === dice2) {
    document.getElementById('result-container').innerHTML = `First dice rolled ${dice1} and dice 2 also rolled ${dice2}. you won three free throws`;
  } else if ((dice1+dice2) % 2 === 0) {
    document.getElementById('result-container').innerHTML = `You rolled a ${dice1} and a ${dice2}. If you add them up you get ${dice1+dice2}. It's an even number so you win one free throw`;
  } else {
    document.getElementById('result-container').innerHTML = "sorry, you lost :(";
  }
}