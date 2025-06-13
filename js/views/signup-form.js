export const signupView = {
    template: `  <header>
<nav-component></nav-component>
  </header>
  <main>
<!--hero starts-->
    <section class='hero'>
      <h1>Fungam<span id='span-h1'>The place to game if you want some fun!</span></h1>
    </section>
<!--hero ends-->

<!--intro start-->
<section class='intro'>
  <h2>Welcome to FunGam!</h2>
  <p>Sign up now to start playing!</p><br>
  <p>Been here before? <router-link to="/login" class="nav-option">Log in</router-link> now.</p>
</section>
<!--intro end-->

<!--sign-up form start-->
<div class="container">
  <h2 id='up-confirm'></h2>
  <form id="contactForm" action="">
    <h2 id='upform-title'>Sign up</h2>
    <label for="username">Username</label>

    <input type="text" id="up-username" name="username" maxlength="12" required/>

    <label for="password">Password</label>

    <input type="password" id="up-password" name="password" minlength='8' maxlength='12' required/>

    <input type="submit" value="Sign up" id="up-submit"/>
  </form>
</div>
<!--sign-up form end-->
  </main>
  <footer-component></footer-component>`
}