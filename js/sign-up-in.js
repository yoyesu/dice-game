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
  signupConfirm.textContent = `${storedName}, you are successfully signed up.`;
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
    signupConfirm.textContent = 'The username or password do not match any account. Please, use a different one.';
  } else {
    signupConfirm.textContent = `Welcome, ${loginUsername.value}`;
  }
}

/////////confirmation of contact form submit//////////

let contactConfirm = document.querySelector('#submit-confirmation');
let contactSubmit = document.querySelector('#conc-submit');

if(contactSubmit){
  contactSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    contactConfirm.innerHTML = 'Thank you!'});
}