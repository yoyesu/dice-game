export const loginView = {
    template: `<header>
<nav-component></nav-component>
    </header>
    <main>
      <!--hero starts-->
      <section class="hero">
        <h1>
          Fungam<span id="span-h1"
            >The place to game if you want some fun!</span
          >
        </h1>
      </section>
      <!--hero ends-->

      <!--intro start-->
      <section class="intro">
        <h2>Welcome to FunGam!</h2>
        <p>Log in to start playing.</p>
        <p>
          Is this your first time here?
          <router-link to="/signup" class="nav-option">Sign up</router-link> now.
        </p>
      </section>
      <!--intro end-->

      <!--log in form start-->
      <div class="container">
        <h2 id="up-confirm"></h2>
        <form id="contactForm" action="">
          <h2 id="form-title">Log in</h2>
          <label for="username">Username</label>

          <input
            type="text"
            id="in-username"
            name="username"
            maxlength="12"
            required
          />

          <label for="password">Password</label>

          <input type="password" id="in-password" name="password" required />

          <input type="submit" value="Log in" id="submit-log-in" />
        </form>
      </div>
      <!--log in form end-->
    </main>
    <footer-component></footer-component>`
}