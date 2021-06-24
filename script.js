// Arrays for character selection
var spCharacters = ("@%+'!#$^?:)(}{][~-_.");
var numberCharacters = ("0123456789");
var lowerCaseCharacters = ("abcdefghijklmnopqrstuvwxyz");
var upperCaseCharacters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var passwordLength = getLength(); // password length gets aassigned
  console.log(passwordLength);
  var password = generateArray(); // generating array to choose characters from
  console.log(password);
  var finalPassword = " "; //final password empty array to be populated
  console.log(finalPassword);
    
  
  for (var i = 0; i < passwordLength; i++) {
      finalPassword += password.charAt(Math.floor(Math.random() * passwordLength));
  }
  

  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;
}

// function to get the password length within the stabilished size

function getLength() {
  var keyLength = window.prompt(" how long is the password? ");
  if((keyLength < 8) || (keyLength > 128)){
    return window.alert("You need it to be at least 8 characters long and at most 128")
  }else  
  return keyLength;
}

// Function to generate the possible characters allowed in the password

function generateArray() {
  var possibleCharacters = [];

  var numbers = window.confirm("Do you want numbers?");
  console.log(numbers);
  var lowerCase = window.confirm("Do you want lowercase characters?");
  console.log(lowerCase);
  var upperCase = window.confirm("Do you want uppercase characters?");
  console.log(upperCase);
  var specCharacters = window.confirm("Do you want special characters?");
  console.log(specCharacters);

  //  populating Array possibleCharacters with characters

  if (numbers) possibleCharacters += numberCharacters;

  if (lowerCase) possibleCharacters += lowerCaseCharacters;

  if (upperCase) possibleCharacters += upperCaseCharacters;

  if (specCharacters) possibleCharacters += spCharacters;

  return possibleCharacters;
}



//function to generate password



