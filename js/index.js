let langIcon = document.querySelector('#lang-icon');
let pagesIcon = document.querySelector('#pag-icon');
let langDropdown = document.querySelector('#lang-drop');
let pagesDropdown = document.querySelector('#pages-drop');

langDropdown.setAttribute('class', 'hidden');
pagesDropdown.setAttribute('class', 'hidden');
langIcon.addEventListener('click', () => {langDropdown.classList.toggle('visible')})
pagesIcon.addEventListener('click', () => {pagesDropdown.classList.toggle('visible')})