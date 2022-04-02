// function to make the form work
let firstName = document.querySelector('#firstName');
let subBtn = document.querySelector('#form-btn');

subBtn.addEventListener('click', event => {
  event.preventDefault();
  if (firstName.value == 0){
    alert('Please, introduce your name to start playing.');
  } else {
    document.cookie = firstName + "=" + document.getElementById('firstName').value;
    document.getElementById('welc-name').innerHTML = `Hi ${firstName.value}, welcome to the game.`
  }
});


