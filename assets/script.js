// Assignment code here
// Assign values for upper, lower, number, and special characters
var passwordCharacters = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\`|}{[]:;?<>,./-="
}
var passwordLength = "";
let validCharacters = "";
var generatedPassword = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var getPasswordLength = function() {
        passwordLength = prompt("How many characters do you need for your password? Must be between 8 and 128 characters.");

        passwordLength = parseInt(passwordLength);

        if (passwordLength >= 8 && passwordLength <= 128) {
            console.log("Your password length is " + passwordLength);
        return passwordLength;
        }
        else {
            window.alert("Select a value between 8 and 128");
            return getPasswordLength();
        }
    };
    getPasswordLength();

//ask if using upper case characters
var getCharacterSet = function () {

var promptUpperCase = window.prompt ('Would you like to use upper case letters for your password? Type "Y" for "yes" or "N" for "no"');

console.log(promptUpperCase);

if (promptUpperCase === "Y" || promptUpperCase === "y") {
    validCharacters += passwordCharacters.upperCase;
}
var promptLowerCase = window.prompt ('Would you like to use lower case letters for your password? Type "Y" for "yes" or "N" for "no"');

console.log(promptLowerCase);

if (promptLowerCase === "y" || promptLowerCase === "Y") {
    validCharacters += passwordCharacters.lowerCase;
}
var promptNumber = window.prompt ('Would you like to use numbers for your password? Type "Y" for "yes" or "N" for "no"');

console.log(promptNumber);

if (promptNumber === "y" || promptNumber === "Y") {
    validCharacters += passwordCharacters.number;
}
var promptSymbol = window.prompt ('Would you like to use special characters for your password? Type "Y" for "yes" or "N" for "no"');

console.log(promptSymbol);
var prompts = [promptUpperCase, promptLowerCase, promptNumber, promptSymbol];
console.log(prompts);

if (promptSymbol === "y" || promptSymbol === "Y") {
    validCharacters += passwordCharacters.symbol;
}

};
getCharacterSet();

  var generatePassword = function() {
    for (var i = 0; i < passwordLength; i++) {
        var index = Math.floor(Math.random() * validCharacters.length);
        generatedPassword += validCharacters[index];
    }
    
    password = generatedPassword;
  };
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);