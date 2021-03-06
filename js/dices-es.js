let nickname = prompt("¿Cómo te llamas?");
function username(){
  if (nickname != null){
    document.getElementById("welc-messa").innerHTML = `Hola, ${nickname}. ¡Vamos a jugar!`
  }
}

window.onload = username();

function diceRoll(){
  let dice1 = Math.floor(Math.random()*6 +1);
  document.getElementById('dice1').innerHTML = dice1; //adding the numbers inside the squares
  let dice2 = Math.floor(Math.random()*6 +1);
    document.getElementById('dice2').innerHTML = dice2;
  let result = `${nickname}, has sacado un ${dice1} y un ${dice2}.`
  if (dice1 === 6 && dice2 === 6) {
    document.getElementById('result-container').innerHTML = `${result} ¡Has ganado un osito!`;
  } else if (dice1 === dice2) {
    document.getElementById('result-container').innerHTML = `${result} Todavía puedes tirar tres veces más.`;
  } else if ((dice1+dice2) % 2 === 0) {
    document.getElementById('result-container').innerHTML = `${result} Juntos suman un número par así que has tenido suerte, puedes tirar ¡una vez más!`;
  } else {
    document.getElementById('result-container').innerHTML = `${result} Qué penita, has perdido :( Ponte una velica para la próxima.`;
  }
}

let diceBtn = document.getElementById('dice-roll');
if (diceBtn){
  diceBtn.addEventListener('click', event => {
    diceRoll();
  });
}