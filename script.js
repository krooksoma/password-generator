// Arrays for character selection
var spCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//function to generate password

function generatePassword() {
  var finalPassword = generateArray();

  return finalPassword;
}


function generateArray() {
  var possibleCharacters = [];
  var generatedPassword = [];

  // window to prompt length of the password generated
  var passwordLength = window.prompt(" how long is the password? ");
  console.log(passwordLength);
  var numbers = window.confirm("Do you want numbers?");
  console.log(numbers);
  var lowerCase = window.confirm("Do you want lowercase characters?");
  console.log(lowerCase);
  var upperCase = window.confirm("Do you want uppercase characters?");
  console.log(upperCase);
  var specCharacters = window.confirm("Do you want special characters?");
  console.log(specCharacters);


  if (specCharacters) {
    possibleCharacters = possibleCharacters.concat(spCharacters);
    if (upperCase) {
      possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
      if (lowerCase) {
        possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
        if (lowerCase) {
          possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
          if (numbers) {
            possibleCharacters = possibleCharacters.concat(numberCharacters);
          }
        }
      }
    }
  }

  console.log(possibleCharacters);

  // for loop to create the password

  for (let i = 0; i < passwordLength; i++) {
    generatedPassword += Math.random(possibleCharacters);
  }

  return generatedPassword;
}