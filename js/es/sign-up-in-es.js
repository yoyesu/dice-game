let username = document.querySelector('#up-username');
let password = document.querySelector('#up-password');
let upSubmit = document.querySelector('#up-submit');
if (upSubmit){
document.querySelector('#up-submit').addEventListener('click', storeRegister);
}
let storedName = localStorage.getItem('username');
let storedPassword = localStorage.getItem('password');

//function to store sign up form input
function storeRegister(event){
  event.preventDefault();
  localStorage.setItem('username', username.value);
  localStorage.setItem('password', password.value);
  document.querySelector('#contactForm').style.visibility = 'hidden';
  let signupConfirm = document.querySelector('#up-confirm');
  signupConfirm.textContent = `${storedName}, te has registrado.`;
}


function checkLogin(){

  let loginUsername = document.querySelector('#in-username');
  let loginPassword = document.querySelector('#in-password');

  if (loginUsername.value != storedName || loginPassword.value != storedPassword){
    alert('El usuario o la contraseña no coinciden con ninguna cuenta. Vuelve a intentarlo.')
  } else {
    alert(`Hola, ${loginUsername}`)
  }
}