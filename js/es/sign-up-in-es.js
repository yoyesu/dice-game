let username = document.querySelector('#up-username');
let password = document.querySelector('#up-password');
let upSubmit = document.querySelector('#up-submit');
if (upSubmit){
  upSubmit.addEventListener('click', storeRegister);
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

/// function to check if you're signed up

let logInBtn = document.querySelector('#submit-log-in');

if (logInBtn){
  logInBtn.addEventListener('click', checkLogin);
}
function checkLogin(event){
  event.preventDefault();
  let loginUsername = document.querySelector('#in-username');
  let loginPassword = document.querySelector('#in-password');

  document.querySelector('#contactForm').style.visibility = 'hidden';
  let signupConfirm = document.querySelector('#up-confirm');

  if (loginUsername.value != storedName || loginPassword.value != storedPassword){
    signupConfirm.textContent = 'El usuario o la contraseña no coinciden con ninguna cuenta. Vuelve a intentarlo.';
  } else {
    signupConfirm.textContent = `Hola, ${loginUsername.value}`;
  }
}

/////////confirmation of contact form submit//////////

let contactConfirm = document.querySelector('#submit-confirmation');
let contactSubmit = document.querySelector('#conc-submit');

if(contactSubmit){
  contactSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    contactConfirm.innerHTML = '¡Gracias!'});
}