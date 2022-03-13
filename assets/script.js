// Assignment code here
// Assign values for upper, lower, number, and special characters
var passwordCharacters = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\`|}{[]:;?<>,./-="
}
var passwordLength = "";
let validChars = "";
var generatedPassword = "";

var getPasswordLength = function() {
    while (passwordLength === "" || passwordLength === null) {
        passwordLength = prompt("How many characters do you need for your password?");

        passwordLength = parseInt(passwordLength);
    }
    console.log("Your password length is " + passwordLength);
    return passwordLength;
};
getPasswordLength();

    function upperCase() {
        return passwordCharacters.upperCase[Math.floor(Math.random() * passwordCharacters.upperCase.length)];
    };
    function lowerCase () {
        return passwordCharacters.lowerCase[Math.floor(Math.random() * passwordCharacters.lowerCase.length)];
    };
    function number() {
        return passwordCharacters.number[Math.floor(Math.random() * passwordCharacters.number.length)];
    };
    function symbol() {
        return passwordCharacters.symbol[Math.floor(Math.random() * passwordCharacters.symbol.length)];
    };

//ask if using upper case characters
var getCharacterSet = function () {

promptUpperCase = window.prompt ('Would you like to use upper case letters for your password? Type "Y" for "yes" or "N" for "no"');

promptUpperCase = promptUpperCase.toLowerCase();

if (promptUpperCase === "y") {
    validChars = passwordCharacters.upperCase + validChars;
}
promptLowerCase = window.prompt ('Would you like to use lower case letters for your password? Type "Y" for "yes" or "N" for "no"');

promptLowerCase = promptLowerCase.toLowerCase();

if (promptLowerCase === "y") {
    validChars = passwordCharacters.lowerCase + validChars;
}
promptNumber = window.prompt ('Would you like to use numbers for your password? Type "Y" for "yes" or "N" for "no"');

promptNumber = promptNumber.toLowerCase();

if (promptNumber === "y") {
    validChars = passwordCharacters.number + validChars;
}
promptSymbol = window.prompt ('Would you like to use special characters for your password? Type "Y" for "yes" or "N" for "no"');

promptSymbol = promptSymbol.toLowerCase();

if (promptSymbol === "y") {
    validChars = passwordCharacters.symbol + validChars;
}
else {
    window.alert("You need to select at least 1 option. Please try again.");
    return getCharacterSet();
}
};
getCharacterSet();


for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * validChars.length);
    generatedPassword += validChars[index];
}

password = generatedPassword;
console.log(password);

//generate password when button is clicked based on length and character set parameters

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);