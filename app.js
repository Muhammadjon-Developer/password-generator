const passwordInput = document.querySelector('.password-box input'),
copyIcon = document.querySelector('.password-box .copy-icon'),
rangeInput = document.querySelector('.range-box input'),
sliderNumber = document.querySelector('.range-box .slider-number'),
generateButton = document.querySelector('.generate-button');

// Characters of albhabet(a-z/A-Z), numbers (0-9), and Symbols ($%&[]...)
let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*(){}_/,`~+-#"

// this function will be called on, page reload, generateButton clicked & rangeInput slide
const generatePassword = () => {
  let newPassword = "";

  // for loop will run till rangeInput value 
  for(let i =0; i < rangeInput.value; i++){
    const randomNumbers = Math.floor(Math.random() * allCharacters.length)
    newPassword += allCharacters[randomNumbers]
  }
  passwordInput.value = newPassword;
  copyIcon.classList.replace("fa-check", "fa-copy") // replace icons
}

rangeInput.addEventListener('input', () => {
  sliderNumber.innerHTML = rangeInput.value;
  generatePassword();
})

// copy passInput's value on copyIcon click
copyIcon.addEventListener('click', () => {
  navigator.clipboard.writeText(passwordInput.value)
  copyIcon.classList.replace("fa-copy", "fa-check")  // replace icons
})

generatePassword()
generateButton.addEventListener('click', generatePassword)

