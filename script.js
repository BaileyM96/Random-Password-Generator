// Assignment Code
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];


var generateBtn = document.querySelector("#generate");


function prompts() { // This function is for prompts so if the user wants to not pick anything it alerts them
  var passWordLength = prompt('How long do you want your password to be?'); //Need a if statement
  if(passWordLength < 8 || passWordLength > 128) { //   || this means or 
    alert('Your password must be between 8 , and 128 characters')
    return prompts() //if the alert comes up it returns us to the start of the prompt
  } else if(isNaN(passWordLength)) {  // if they enter in a letter instead of number it way say NaN(Not a Number)
    alert('Please enter in a number')
    return prompts() // returns us to begining
  }


var includeSpecialChar = confirm('would you like to add special characters?');
var includeUpperCase = confirm('would you like to add uppercase characters?');
var includeLowerCase = confirm('would you like to add lowercase characters?');
var includeNumbers= confirm('would you like to add numbers characters?');

if(includeSpecialChar === false && includeUpperCase === false && includeLowerCase === false && includeNumbers === false) {
  alert('You have to choose at least one character type')
  return prompts() //This if statement is for if you dont pick any of the options
}
var options = {   // made an object container with the variables  to add to generate password functon//
    passWordLength: passWordLength,
    includeUpperCase: includeUpperCase,
    includeLowerCase: includeLowerCase,
    includeSpecialChar: includeSpecialChar,
    includeNumbers: includeNumbers
}
 return options
}
function generatePassword() {  
var options = prompts()

var possiblePassword = [];  
var password = [];
var requiredChars = [];

function selectRandomChar(array) {  //Made a new function and an array to be sure to always include at  least 1 of the chars from the variable//
   var randomNumber = Math.floor(Math.random() * array.length); //Used math so it can randomly pick a char from the variable//
   return array[randomNumber]; //gives us a random char from the array//
}


if(options.includeUpperCase) {  //This says if the user picks uppercase it will include the array for uppercase//
  possiblePassword = possiblePassword.concat(upperCase);  //concat adds an array to another exsisting array//
  requiredChars.push(selectRandomChar(upperCase)); // This pushes the function to the empty array//
}
if(options.includeLowerCase) { //And it just repeats 3 more times//
    possiblePassword = possiblePassword.concat(lowerCase);
    requiredChars.push(selectRandomChar(lowerCase)); 
  }
  if(options.includeSpecialChar) {
    possiblePassword = possiblePassword.concat(specialChar);
    requiredChars.push(selectRandomChar(specialChar)); 
  }
  if(options.includeNumbers) {
    possiblePassword = possiblePassword.concat(numbers);
    requiredChars.push(selectRandomChar(numbers)); 
  }

for(let i = 0; i < options.passWordLength; i++) {
  var character = selectRandomChar(possiblePassword)
  password.push(character)
}
for(let i = 0; i < requiredChars.length; i++) {
  password[i] = requiredChars[i]
}

return password;
}



// Write password to the #password input
function writePassword() {
var password = generatePassword();
password = password.join('');
var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);