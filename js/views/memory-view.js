import {cardsVillagers} from "../data/villager-cards.js";

export const memoryView = {
    template: `
  <header>
<nav-component></nav-component>
  </header>
  <main>
<!--hero starts-->
    <section class='hero' id='memory-hero-img'>
      <h1 id='memo-h1'>Memory game</h1>
    </section>
<!--hero ends-->

<!--rules start-->
<section class='rules-container' id='rules-memory'>
  <h3>Before you start:</h3>
  <p>Six of your lovely neighbours in Animal Crossing want to give you their selfie, but before... they want you to solve this game!</p>
  <br>
  <p id='good-messa'></p>
</section>
<!--rules end-->

<!--game start-->
<h3 id='score'>Score: <span id='result'></span></h3>

<section class='grid'>
  
</section>
<!--game end-->

<!--result start-->
<section id='mem-result-section'>
  <h2 id='result-container'></h2>
  <div class='hidden' id='final-popup'>
    <h2 id='result-container2'></h2>
    <img src="../../img/memory/bill.png" alt="bill">
    <img src="../../img/memory/blanche.png" alt="blanche">
    <img src="../../img/memory/bonbon.png" alt="bonbon">
    <img src="../../img/memory/butch.png" alt="butch">
    <img src="../../img/memory/cranston.png" alt="cranston">
    <img src="../../img/memory/cube.png" alt="cube">
    <button id='reset-btn'>Play again</button>
  </div>
</section>

<!--result end-->
</main>
<footer-component></footer-component>
`,
    mounted() {
        let finalPopup = document.querySelector('#final-popup');
        let resetBtn = document.querySelector('#reset-btn');
        resetBtn.addEventListener('click', () => resetGame(finalPopup));
        cardsVillagers.sort(() => 0.5 - Math.random());
        createBoard(cardsVillagers);
        playGame();
    }
}


function playGame() {
    console.log("playGame function called");
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    // checkMatch(cardsWon, cardsChosenId, cardsChosen);

    // return false;
}

function createBoard(cardsVillagers) {
    let grid = document.querySelector('.grid');
    for (let i = 0; i < cardsVillagers.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', '../../img/memory/card-back.png');
        card.setAttribute('data-id', i);
        card.setAttribute('class', 'card-border');
        card.addEventListener('click', () => flipCard(card, [], []));
        grid.appendChild(card);
    }
}
//
// function checkMatch(cardsWon, cardsChosenId, cardsChosen) {
//     let userName = "storedName";
//     let cheerText = document.querySelector('#result-container');
//     let finalCheer = document.querySelector('#result-container2');
//     let resultDisplay = document.querySelector('#result');
//     let cards = document.querySelectorAll('img');
//     let optionOneId = cardsChosenId[0];
//     let optionTwoId = cardsChosenId[1];
//     if (optionOneId == optionTwoId) {
//         cards[optionOneId].setAttribute('src', 'img/memory/card-back.png');
//         cards[optionTwoId].setAttribute('src', 'img/memory/card-back.png');
//         if ('username' in localStorage) {
//             cheerText.innerHTML = `${userName}, you picked the same card. Don't cheat!`;
//         } else {
//             cheerText.innerHTML = "You picked the same card. Don't cheat!";
//         }
//         setTimeout(clearCheer, 1200);
//     } else if (cardsChosen[0] === cardsChosen[1]) {
//         cards[optionOneId].style.visibility = 'hidden';
//         cards[optionTwoId].style.visibility = 'hidden';
//         cardsWon.push(cardsChosen);
//         if ('username' in localStorage) {
//             cheerText.innerHTML = `Nice, ${userName}! You found a match!`;
//         } else {
//             cheerText.innerHTML = 'You found a match! Nice, keep going!';
//         }
//         setTimeout(clearCheer, 1200);
//     } else {
//         cards[optionOneId].setAttribute('src', 'img/memory/card-back.png');
//         cards[optionTwoId].setAttribute('src', 'img/memory/card-back.png');
//         if ('username' in localStorage) {
//             cheerText.innerHTML = `Uh... you sure you can find them all, ${userName}?`;
//         } else {
//             cheerText.innerHTML = 'Your memory game is weak. Keep practicing!';
//         }
//         setTimeout(clearCheer, 1200);
//     }
//     // cardsChosen = [];
//     // cardsChosenId = [];
//     resultDisplay.textContent = cardsWon.length;
//     if (cardsWon.length === cardsVillagers.length / 2) {
//         setTimeout(showFinalCheer, 1210);
//
//     }
// }
//
// function clearCheer() {
// //////clear cheer text after a second////////
//     cheerText.innerHTML = '';
// }
//
// function showFinalCheer() {
//     if ('username' in localStorage) {
//         finalCheer.innerHTML = `What a star, ${userName}! You found all of our selfies! Invite us over to your place soon!`;
//     } else {
//         finalCheer.innerHTML = 'What a star! You found all of our selfies! Invite us over to your place soon!';
//     }
//     finalPopup.removeAttribute('class', 'hidden');
// }
//
function flipCard(card) {
    console.log(cardsChosen);
    let cardId = card.getAttribute('data-id');
    card.setAttribute('src', cardsVillagers[cardId].img);
}


function resetGame(finalPopup) {
    finalPopup.setAttribute('class', 'hidden');
    cardsVillagers.sort(() => 0.5 - Math.random());
    let allCells = document.querySelectorAll('img');
    let arrayCells = Array.from(allCells);
    arrayCells.forEach((e) => {
        e.style.visibility = 'visible';
        e.setAttribute('src', '../img/memory/card-back.png');
    });
}