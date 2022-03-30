function diceRoll(){
  let dice1 = Math.floor(Math.random()*6);
    document.getElementById('dice1').innerHTML = dice1;
  let dice2 = Math.floor(Math.random()*6);
    document.getElementById('dice2').innerHTML = dice2;
  if (dice1 === 6 && dice2 === 6) {
    document.getElementById('result-container').innerHTML = `¡Felicidades! Te ha tocado un osito. ¡Mejor que el gordo de la Navidad!`;
  } else if (dice1 === dice2) {
    document.getElementById('result-container').innerHTML = `¡Dos números iguales! No está mal, has conseguido tres tiradas más. ¡Tira a por todas!`;
  } else if ((dice1+dice2) % 2 === 0) {
    document.getElementById('result-container').innerHTML = `Has sacado un ${dice1} en el primer dado y un ${dice2} en el segundo. Bueeno... un ${dice1+dice2}. Al menos es par y tienes una tirada más. ¡Venga a por todas!`;
  } else {
    document.getElementById('result-container').innerHTML = "Oh noooo... Saca la caja de pañuelos porque has perdido :( ¡Hasta la próxima!";
  }
}