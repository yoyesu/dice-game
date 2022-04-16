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


function checkLogin(){

  let loginUsername = document.querySelector('#in-username');
  let loginPassword = document.querySelector('#in-password');

  if (loginUsername.value != storedName || loginPassword.value != storedPassword){
    alert('The username or password do not match any account. Please, use a different one.')
  } else {
    alert(`Welcome, ${loginUsername}`)
  }
}