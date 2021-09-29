// Assignment Code
// Pseudo Code
/*
I want to prompt the user multiple times in order to establish password criteria
The prompts will offer choices to the user that set up their password
The password length is to be a minimum of 8 character and a maximum of 128 characters
The password can be comprised of lowercase/uppercase characters, numbers, and/or special characters
At least one character from the chosen decisions shall be present
A password is created when the user has finished the prompts that matches their selections
The password is to be displayed in either an alert or on the page
*/
var generateBtn = document.querySelector("#generate");

/*
Establish all variables globally to be called upon as needed
The variables to be established are the password length, upper case characters, lower case characters, numbers, and special characters
*/
var lengthChoice = 8;
var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// Write password to the #password input
/*
Create if statements based on the choices of the user
Combine the different arrays into one singular array based on the users choices
Provide an error prompt should the user attempt to create a password outside of the intended parameters
Make the users decisions its own function to make it easier to call upon with the other functions
*/
function userInput() {
  userDecision = [];

  lengthChoice = parseInt(prompt("Choose a number between 8 and 128."));

  if (isNaN(lengthChoice) || lengthChoice < 8 || lengthChoice > 128) {
    alert("Password length must be at least 8 characters long.");
  return false;
  }
  if (confirm("Would you like to use UPPER case characters?")) {
    userDecision = userDecision.concat(upperCharacters);
  }
  if (confirm("Would you like to use lower case characters?")) {
    userDecision = userDecision.concat(lowerCharacters);
  }
  if (confirm("Would you like to use number characters? (i.e. 1, 2, 3, 4, 5, etc.)")) {
    userDecision = userDecision.concat(numberCharacters);
  }
  if (confirm("Would you like to use special characters? (i.e. @, #, $, %, etc.)")) {
    userDecision = userDecision.concat(specialCharacters);
  }

  return true;
}

/*
Render this function to only generating a password based on a seperate function that gathers user input
Have function shuffle up the arrays based upon the users input for the prompts
*/
function generatePassword() {
  var userPass = "";

  for (var i = 0; i < lengthChoice; i++) {
    var shuffle = Math.floor(Math.random() * userDecision.length);

    userPass = userPass + userDecision[shuffle];
  }

  return userPass;
}

/*
Establish this function to produce the final result based upon users input and the shuffling of the arrays
Call upon user function here to combine the data of new function
Establish the other function as an if statement for the purposes of only producing a result if the user abides by the parameters
*/
function writePassword() {
  var inputResults = userInput();

  if (inputResults) {
    var finalProduct = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = finalProduct;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
