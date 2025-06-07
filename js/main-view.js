export const home = {
    template: `<header>
    <nav-component></nav-component>
</header>
<main>
    <!--hero starts-->
    <section class="hero">
        <h1>
            <a href="./index.html">FunGam</a
            ><span id="span-h1">The place to game if you want some fun!</span>
        </h1>
    </section>
    <!--hero ends-->

    <!--intro start-->
    <section class="intro">
        <h2>Explore our wide selection of games!</h2>
    </section>
    <!--intro end-->

    <!--games catalog start-->

    <button id='arrow-btn'><i class="fa-solid fa-arrow-up"></i>
    </button>
    <section class="games-wrapper">
        <article class="game-card" id="game1">
            <section class="game-img">
                <img
                    class="card-img"
                    src="img/index/ac-card.jpg"
                    alt="picture of Tom Nook"
                />
            </section>
            <section class="game-desc">
                <h3>Animal Crossing Cards</h3>
                <p>Your lovely neighbours have some selfies for you. Find them all!</p>
                <a class="card-btn" href="memory.html">Let's play</a>
            </section>
        </article>
        <article class="game-card">
            <section class="game-img" id="game2">
                <img
                    class="card-img"
                    src="img/index/ttt-card.png"
                    alt="picture of tic tac toe game"
                />
            </section>
            <section class="game-desc">
                <h3>Hit That Toe</h3>
                <p>A punnier version of the classic tic tac toe game. Hit those toes!</p>
                <a class="card-btn" href="tic-tac-toe.html">Let's play</a>
            </section>
        </article>
        <article class="game-card">
            <section class="game-img" id="game3">
                <img class="card-img" src="img/index/tbc.png" alt=""/>
            </section>
            <section class="game-desc">
                <h3>The Classic Hangman</h3>
                <p>Can you guess the word before it's too late? Let's find out!</p>
                <a class="card-btn" href="hangman.html">Let's play</a>
            </section>
        </article>
        <article class="game-card">
            <section class="game-img" id="game4">
                <img class="card-img" src="img/index/tbc.png" alt=""/>
            </section>
            <section class="game-desc">
                <h3>TBC</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <a class="card-btn" href="">Let's play</a>
            </section>
        </article>
        <article class="game-card">
            <section class="game-img" id="game5">
                <img class="card-img" src="img/index/tbc.png" alt=""/>
            </section>
            <section class="game-desc">
                <h3>TBC</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <a class="card-btn" href="">Let's play</a>
            </section>
        </article>
        <article class="game-card">
            <section class="game-img" id="game6">
                <img class="card-img" src="img/index/tbc.png" alt=""/>
            </section>
            <section class="game-desc">
                <h3>TBC</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <a class="card-btn" href="">Let's play</a>
            </section>
        </article>
    </section>


    <!--games catalog end-->
</main>
<footer-component></footer-component>
`,

    mounted() {


///////scroll to the top btn/////////
        let scrollBtn = document.querySelector("#arrow-btn");

// When the user scrolls down 20px from the top of the document, show the button
        if (scrollBtn) {
            window.onscroll = function () {
                scrollFunction()
            };

        }

        function scrollFunction() {
            if (document.documentElement.scrollTop > 20) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        }

// When the user clicks on the button, scroll to the top of the document
        if (scrollBtn) {
            scrollBtn.addEventListener('click', topFunction);

        }

        function topFunction() {
            document.documentElement.scrollTop = 0;
        }
    }
}