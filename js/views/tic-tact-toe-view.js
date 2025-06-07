export const ticTactToeView = {
    template: `
    <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/tic-tac-toe.css">
  <script
      src="https://kit.fontawesome.com/2eb9dd0896.js"
      crossorigin="anonymous"
    ></script>
  <title>Hit that toe (tic-tac-toe)</title>
</head>
<body id='orange-background'>
  <header>
    <nav-component></nav-component>
  </header>
  <main>
<!--hero starts-->
    <section class='hero' id='hero-ttt'>
      <h1 id='ttt-h1'>Hit that <span>toe</span></h1>
    </section>
<!--hero ends-->

<!--rules start-->
<section class='rules-container' id='rules-memory'>
  <h3>Before you start:</h3>
  <p>Rules are simple: connect three in a row before the computer does!<br>Go hit those toes!!</p>
  <br>
  <p id='good-messa'></p>
</section>
<!--rules end-->

<!--game starts-->
<section class='grid'>

</section>
<div id='reset-btn-container'>
  <button id='reset-btn'>Reset</button>

</div>
<!--game ends-->

<!--result start-->
<section id='result-section-ttt'>
  <h2 id='result-container'></h2>
</section>
<!--result end-->
</main>
<footer-component></footer-component>

  <script src="./js/tic-tac-toe.js"></script>
  <script src="./js/index.js"></script>
  <script src="./js/sign-up-in.js"></script>
</body>
`,

    mounted() {

    }
}