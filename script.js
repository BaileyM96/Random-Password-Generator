// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword = 'abcdefghijklmnopqrstuvwxyz';
var specialCharacters = '!@#$%^&*()'
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var randomSymbols = '!@#$%^&*()';
var passwordLength = 8;




window.prompt('How many characters would you like your password to be?');
window.confirm('Click OK to add special characters');
window.confirm('Click OK to add lower case');
window.confirm('Click OK to add upper case');
window.confirm('Click OK to add Numbers');



// Write password to the #password input
function writePassword() {
  window.prompt('How many characters would you like your password to be?');
window.confirm('Click OK to add special characters');
window.confirm('Click OK to add lower case');
window.confirm('Click OK to add upper case');
window.confirm('Click OK to add Numbers');
  var password = generatePassword[Math.floor(Math.random() * generatePassword.length (generatePassword++))];
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
