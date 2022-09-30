// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {  //This function is linked to the HTML code and the actual button to generate password so the rest of the code goes into this function//
  var includeLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var includeUpperCase= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var includeNumbers = ['0', '2', '3', '4', '5', '6', '7', '8', '9'];
  var includeSpecialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

// Had to include 5 questions for the prompt//
var passWordLength = prompt('How long do you want your password to be?');
//use an if statement for the variables//
var includeSpecialChar = confirm('would you like to add special characters?');
var includeUpperCase = confirm('would you like to add uppercase characters?');
var includeLowerCase = confirm('would you like to add lowercase characters?');
var includeNumbers= confirm('would you like to add numbers characters?');

var options = {   // made an object container with the variables  to add to generate password functon//
    passWordLength: passWordLength,
    includeUpperCase: includeUpperCase,
    includeLowerCase: includeLowerCase,
    includeSpecialChar: includeSpecialChar,
    includeNumbers: includeNumbers
}

var possiblePassword = [];  // Made 2 new variables  to make empty arrays so we can add the 5 variables to them//
var password = [];

function selectRandomChar(array) {  //Made a new function and an array to be sure to always include at  least 1 of the chars from the variable//
   var randomNumber = Math.floor(Math.random() * array.length); //Used math so it can randomly pick a char from the variable//
   return array[randomNumber]; //gives us a random char from the array//
}


if(options.includeUpperCase) {  //This says if the user picks uppercase it will include the array for uppercase//
  possiblePassword = possiblePassword.concat(includeUpperCase);  //concat adds an array to another exsisting array//
  password.push(selectRandomChar(includeUpperCase)); // This pushes the function to the empty array//
}
if(options.includeLowerCase) { //And it just repeats 3 more times//
    possiblePassword = possiblePassword.concat(includeLowerCase);
    password.push(selectRandomChar(includeLowerCase)); 
  }
  if(options.includeSpecialChar) {
    possiblePassword = possiblePassword.concat(includeSpecialChar);
    password.push(selectRandomChar(includeSpecialChar)); 
  }
  if(options.includeNumbers) {
    possiblePassword = possiblePassword.concat(includeNumbers);
    password.push(selectRandomChar(includeNumbers)); 
  }


  var remainingChars = options.length - password.length;

  for(var i = 0; i < remainingChars; i++) {
    var randChar = selectRandomChar(possiblePassword);
    password.push(randChar);

}

}



// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);