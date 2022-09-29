// Assignment Code
var generateBtn = document.querySelector("#generate");

// var characterLength = 128
// var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
// var specialCharacters = '!@#$%^&*()';
// var number = '0123456789';


function generatePassword() {
var userInput = window.prompt('Password must be between 8 to 128 characters');

var wantsLowerCase = window.confirm('Click OK to add lowercase');
var wantsUpperCase = window.confirm('Click OK to add uppercase');
var wantsNumbers = window.confirm('Click OK to add numbers');
var wantsSpecialCharacters = window.confirm('Click OK to add special characters');


var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lowerCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
}






// window.prompt('How many characters would you like your password to be?');
// window.confirm('Click OK to add special characters');
// window.confirm('Click OK to add lower case');
// window.confirm('Click OK to add upper case');
// window.confirm('Click OK to add Numbers');



// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// [Math.floor(Math.random() * generatePassword.length (generatePassword++))];