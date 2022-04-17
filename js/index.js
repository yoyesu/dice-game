let langIcon = document.querySelector('#lang-icon');
let pagesIcon = document.querySelector('#pag-icon');
let langDropdown = document.querySelector('#lang-drop');
let pagesDropdown = document.querySelector('#pages-drop');

langDropdown.setAttribute('class', 'hidden');
pagesDropdown.setAttribute('class', 'hidden');
langIcon.addEventListener('click', () => {langDropdown.classList.toggle('visible')})
pagesIcon.addEventListener('click', () => {pagesDropdown.classList.toggle('visible')})

///////scroll to the top btn/////////
scrollBtn = document.querySelector("#arrow-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
if (scrollBtn){
  scrollBtn.addEventListener('click', topFunction);

}
function topFunction() {
  document.documentElement.scrollTop = 0;
}