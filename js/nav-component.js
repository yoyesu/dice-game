export const NavComponent = {

    template: `<nav>
        <i class="fa-solid fa-globe" id='lang-icon'>
        <div class='dropdown' id="lang-drop">
        <div class="dropdown-content" >
            <a href="../es/index-es.html" id="español">Español</a>
            <a href="../index.html" id="english">English</a>
          </div>
        </div>
        </i> 

        <i class="fa-solid fa-bars" id='pag-icon'>
        <div class='dropdown' id="pages-drop">
        <div class="dropdown-content" id='content-pages'>
          <a href="../login-form.html" class="nav-option">Log in</a>
          <a href="../signup-form.html" class="nav-option">Sign up</a>
          <a href="../contact.html" class="nav-option">Contact</a>
          </div>
        </div>

        </i>
        <div id='drop-tablet'>
          <a href="../login-form.html" class="nav-option">Log in</a>
          <a href="../signup-form.html" class="nav-option">Sign up</a>
          <a href="../contact.html" class="nav-option">Contact</a>
        </div>
        
      </nav>`,

    mounted() {
        let langIcon = document.querySelector('#lang-icon');
        let pagesIcon = document.querySelector('#pag-icon');
        let langDropdown = document.querySelector('#lang-drop');
        let pagesDropdown = document.querySelector('#pages-drop');

        langDropdown.setAttribute('class', 'hidden');
        pagesDropdown.setAttribute('class', 'hidden');
        langIcon.addEventListener('click', () => {langDropdown.classList.toggle('visible')});
        pagesIcon.addEventListener('click', () => {pagesDropdown.classList.toggle('visible')});
    }
};
