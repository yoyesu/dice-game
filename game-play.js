function getCookie(firstName) {
  let name = firstName + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(firstName) == 0) {
      return c.substring(firstName.length, c.length);
    }
  }
  return "";
}


let firstName = getCookie();
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
    document.getElementById('result-container').innerHTML = `Hi, ${firstName.value}, you rolled a ${dice1} and a ${dice2}. If you add them up you get ${dice1+dice2}. It's an even number so you win one free throw`;
  } else {
    document.getElementById('result-container').innerHTML = "sorry, you lost :(";
  }
}

let diceBtn = document.getElementById('dice-roll');
diceBtn.addEventListener('click', event => {
  diceRoll();
});