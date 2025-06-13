export const hangmanView = {
    template: `
<header>
    <nav-component></nav-component>
</header>
<main>
    <!--hero starts-->
    <section class='hero' id='hero-ttt'>
        <h1 id='ttt-h1'>The hangman</span></h1>
    </section>
    <!--hero ends-->

    <!--rules start-->
    <section class='rules-container' id='rules-memory'>

        <p id='good-messa'></p>
    </section>
    <!--rules end-->

    <!--game starts-->
    <div class="letter-div"></div>
    <p>Get a hint if you need any help</p>
    <div class="hint-div hidden">
        <p>Hint:-</p>
        <p class="hint-txt">Sample Hint for test</p>
    </div>
    <div class="word-div"></div>
    <h3>Remaining Lives: <span class="lives">5</span></h3>
    <div class="row hint-div">
        <button class="hint-btn">Hint</button>
        <button class="reset-btn">Reset</button>
    </div>
    </div>
    <!--game ends-->

    <!--result start-->
    <div class="notif hidden">
        <h2>Game Over !!</h2>
        <h3 class="notif-content">You won</h3>
        <h4>Correct Word: <span class="notif-span"></span></h4>
        <button class="notif-btn">Play again</button>
    </div>
    <!--result end-->
</main>
<footer-component></footer-component>
`,

    mounted() {

    }
}