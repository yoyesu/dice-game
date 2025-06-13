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

    }
}