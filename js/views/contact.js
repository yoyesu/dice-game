export const contactView = {
    template: `
  <header>
<nav-component></nav-component>
  </header>
  <main>
<!--hero starts-->
    <section class='hero'>
      <h1>FunGam<span id='span-h1'>The place to game if you want some fun!</span></h1>
    </section>
<!--hero ends-->

<!--intro start-->
<section class='intro'>
  <h2>Share your feedback with us!</h2>
  <p>We'd love to hear from you.<br>Is there any game you think we're missing? Did you find any issues in our games? Leave us a comment and we'll look into it.</p>
</section>
<!--intro end-->

<!--contact form start-->
<div class="container">
  <h2 id='up-confirm'></h2>
  <form id="contactForm" action="">
    <h2 id='upform-title'>Contact Us</h2>
    <label for="username">Name</label>

    <input type="text" id="up-username" name="username" maxlength="12" required/>
    <label for="email">Email</label>

    <input type="email" id="email" name="email" required/>

    <label for="comment">Your message</label>

    <textarea id='comment' required></textarea>
    <p id='submit-confirmation'></p>
    <input type="submit" value="Submit" id="conc-submit"/>
  </form>
</div>
<!--contact form end-->
  </main>
  <footer-component></footer-component>`
}