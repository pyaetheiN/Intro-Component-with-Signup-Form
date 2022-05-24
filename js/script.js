// elements
const form = document.querySelector('.form'),
      fName = document.querySelector('.form__first-name'),
      lName = document.querySelector('.form__last-name'),
      email = document.querySelector('.form__email'),
      password = document.querySelector('.form__password'),
      btn = document.querySelector('.form__btn');

// regex patterns
const validName = /^([A-Z])([a-z]{1,20})/g,
      validEmail = /^(?:[a-zA-Z0-9]){2,20}@{1}(?:[a-z0-9]){2,20}\.{1}(?:[a-z]{2,20})((\.(?:[a-z]){2,3})?)$/,
      validPassword = /([a-zA-Z0-9])([^a-zA-Z0-9])/;

// error messages / icons
const fNameError = document.querySelector('.fname-error'),
      lNameError = document.querySelector('.lname-error'),
      emailError = document.querySelector('.email-error'),
      passwordError = document.querySelector('.password-error');

form.addEventListener('submit', (e) => {
  if( fName.value.match(validName) &&
      lName.value.match(validName) &&
      email.value.match(validEmail) &&
      password.value.match(validPassword)){
    return;
  } else{
    e.preventDefault();
  }

  showErrors();
  exceptEmail();
})

function showErrors(){
  errorMsg(fName, validName, fNameError, 'First Name');
  errorMsg(lName, validName, lNameError, 'Last Name');
  errorMsg(password, validPassword, passwordError, 'Password');
}

// error message
function errorMsg(input, validInput, inputError, type){
  const inputContainer = inputError.parentNode;
  const errorBorder = inputContainer.children[0];
  const errorIcon = inputContainer.children[2];

  if(input.value === ''){
    inputError.innerText = `${type} cannot be empty`;
    errorBorder.classList.add('input-error');
    errorIcon.style.display = 'block';

    // remove placeholder
    input.setAttribute('placeholder', '');
  }
  else if(!input.value.match(validInput)){
    inputError.innerText = `${type} is invalid`;
    errorBorder.classList.add('input-error');
    errorIcon.style.display = 'block';

    // remove placeholder
    input.setAttribute('placeholder', '');
  } 
  else{
    inputError.innerText = '';
    errorBorder.classList.remove('input-error');
    errorIcon.style.display = 'none';
  }
}

// email exception
function exceptEmail(){
  const inputContainer = emailError.parentNode;
  const errorBorder = inputContainer.children[0];
  const errorIcon = inputContainer.children[2];

  if(email.value === ''){
    emailError.innerText = 'Email cannot be empty';
    errorBorder.classList.add('input-error');
    errorIcon.style.display = 'block';

    // remove placeholder
    email.setAttribute('placeholder', '');
  } 
  else if(!email.value.match(validEmail)){
    emailError.innerText = 'Looks like this is not an email';
    errorBorder.classList.add('input-error');
    errorIcon.style.display = 'block';

    // remove placeholder
    email.setAttribute('placeholder', '');
  } 
  else{
    emailError.innerText = '';
    errorBorder.classList.remove('input-error');
    errorIcon.style.display = 'none';
  }
}