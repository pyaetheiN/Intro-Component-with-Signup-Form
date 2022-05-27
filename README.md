# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](/screenshots/desktop-preview.png)

### Links

- Solution URL: https://www.frontendmentor.io/solutions/intro-component-with-signup-form-using-flexbox-LeHaTofcb_
- Live Site URL: https://pyaethein.github.io/Intro-Component-with-Signup-Form/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS
- Vanilla JavaScript

### What I learned

- more about regex patterns
- password validation using lookahead assertions
- toggle password visibility

```js
const validName = /^[A-Z]([a-zA-Z.\s]){1,}$/, // first letter must be a capital letter (minimum 2 words)
      validEmail = /^(?:[a-zA-Z0-9]){2,20}@{1}(?:[a-z0-9]){2,20}\.{1}(?:[a-z]{2,20})((\.(?:[a-z]){2,3})?)$/,
      validPassword = /^(?=.*\d)?(?=.*[a-z])(?=.*[A-Z])?.{5,30}$/; // at least one digit, one lowercase, one uppercase(optional) 

passwordIcon.addEventListener('click', () => {
  if(password.type === 'password'){
    password.type = 'text';
    passwordIcon.classList.replace('uil-eye-slash', 'uil-eye');
  } else{
    password.type = 'password';
    passwordIcon.classList.replace('uil-eye', 'uil-eye-slash');
  }
})
```

### Continued development

- `transform: scale(1.3)` works great for screens larger than 1200px and I'll be using it for sooner projects

### Useful resources

- https://www.w3resource.com/javascript/form/password-validation.php 
- https://www.regular-expressions.info/lookaround.html
- https://stackoverflow.com/questions/32125809/regex-using-dot-star-in-lookaheads

## Author

- Frontend Mentor - [@pyaetheiN](https://www.frontendmentor.io/profile/pyaetheiN)
- Twitter - [@pt_boyyy](https://www.twitter.com/pt_boyyy)