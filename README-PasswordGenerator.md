# Random Password Generator

## Description

For this assignment the password generator was not functioning for its intended purpose. My assignment was to add code to the generate password function
and add variables that have all the random characters. Such as numbers, lowercase characters, uppercase characters, and special characters.Then I added prompts for adding the number of characters to include in the password and confirms for including uppercase, special characters etc.
In order for the generator to work I had to add an object with the prompts added to them so I can call them later in my if statements and for loops. 
Added alerts for the user if they dont add the required character limit into the prompt and have it return them back to the first prompt.
Inside the generate password function  I created a variable that has math floor and math random expression to randomly pick a number in the arrays.
Towards the end of the code I added 4 if statements that will guarentee the password will include at least one character from the users selection using .push().
At the end of it I used a incremnt for the password length so that it knows how many characters to use for the password, and at the end I used the return password statement 
and password.join("") to make the array into a string when it outputs the password.

## Link to Website

https://baileym96.github.io/Random-Password-Generator/


## License 

N/A

## Screenshots
![Random-Password-Generator](https://user-images.githubusercontent.com/108101478/193482873-cdfad5eb-22fb-48d9-a1c4-2f24a322ade5.jpg)
