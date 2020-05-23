// Assignment Code
// Arrays for different character types
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var specialCharacters = "!#$%&'()*+,-/:;<=>?@[]^_{}|~".split("");
console.log(lowerCase, upperCase, numbers, specialCharacters);
// Password Generation
function generatePassword() {
  // Prompt and Confirms
  var passwordLength = prompt(
    "How many characters long would you like your password to be?  Keep your selection between 8 and 128 characters."
  );

  if (!passwordLength) {
    alert("Nothing was entered.");
    return;
  } else if (passwordLength < 8) {
    alert("This password length is too short.");
    return;
  } else if (passwordLength > 128) {
    alert("This Password length is too long.");
  } else {
    var upperConfirm = confirm(
      "Do you want your password to include upercase letters?"
    );
    var lowerConfirm = confirm(
      "Do you want your password to include lowercase letters?"
    );
    var specialConfirm = confirm(
      "Do you want your password to include special characters?"
    );
    var numberConfirm = confirm(
      "Do you want your password to include numbers?"
    );
    //Loops confirms if no character type is selected.  Keeps User from having to start over at initial prompt.
    while (
      !upperConfirm &&
      !lowerConfirm &&
      !specialConfirm &&
      !numberConfirm
    ) {
      alert("Please choose at least one character type.");
      var upperConfirm = confirm(
        "Do you want your password to include upercase letters?"
      );
      var lowerConfirm = confirm(
        "Do you want your password to include lowercase letters?"
      );
      var specialConfirm = confirm(
        "Do you want your password to include special characters?"
      );
      var numberConfirm = confirm(
        "Do you want your password to include numbers?"
      );
    }
    var passwordCharacters = [];
    if (upperConfirm) passwordCharacters = passwordCharacters.concat(upperCase);
    if (lowerConfirm) passwordCharacters = passwordCharacters.concat(lowerCase);
    if (specialConfirm)
      passwordCharacters = passwordCharacters.concat(specialCharacters);
    if (numberConfirm) passwordCharacters = passwordCharacters.concat(numbers);

    console.log(passwordCharacters);
    //For loop that generates password
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var generatedCharacters =
        passwordCharacters[
          Math.floor(Math.random() * passwordCharacters.length)
        ];
      password = password + generatedCharacters;
      console.log(password);
    }
    return password;
  }
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
