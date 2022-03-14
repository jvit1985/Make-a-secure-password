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
        passwordLength = prompt("How many characters would you like for your password to be? Must be between 8 and 128 characters.");

        passwordLength = parseInt(passwordLength);

        if (passwordLength >= 8 && passwordLength <= 128) {
            console.log("Your password length is " + passwordLength);
        return passwordLength;
        }
        else {
            window.alert("Please select a value between 8 and 128");
            return getPasswordLength();
        }
    };
    getPasswordLength();

//ask if using upper case characters
var getCharacterSet = function () {

    var promptUpperCase = function () {
        UpperCase = prompt ('Would you like to use upper case letters for your password? Type "y" for "Yes" or "n" for "No"');

    if (UpperCase === "Y" || UpperCase === "y") {
        validCharacters += passwordCharacters.upperCase;
    }
    else if (UpperCase === "N" || UpperCase === "n") {
    }
    else {
        window.alert("Please enter y or n.")
        return promptUpperCase();
    }
    };
    promptUpperCase ();

    var promptLowerCase = function () {
        LowerCase = prompt ('Would you like to use lower case letters for your password? Type "y" for "Yes" or "n" for "No"');

    if (LowerCase === "y" || LowerCase === "Y") {
        validCharacters += passwordCharacters.lowerCase;
    }

    else if (LowerCase === "n" || LowerCase === "N") {
    }

    else {
        window.alert("Please enter y or n.")
        return promptLowerCase();
    }
    };
    promptLowerCase();

    var promptNumber = function () {
        NumberCase = prompt ('Would you like to use numbers for your password? Type "y" for "Yes" or "n" for "No"');

    if (NumberCase === "y" || NumberCase === "Y") {
        validCharacters += passwordCharacters.number;
    }

    else if (NumberCase === "n" || NumberCase === "N") {
    }

    else {
        window.alert("Please enter y or n.")
        return promptNumber();
    }
    };
    promptNumber();

    var promptSymbol = function () {
        Symbol = prompt ('Would you like to use special characters for your password? Type "y" for "Yes" or "n" for "No"');

//var prompts = [promptUpperCase, promptLowerCase, promptNumber, promptSymbol];

    if (Symbol === "y" || Symbol === "Y") {
        validCharacters += passwordCharacters.symbol;
    }

    else if (Symbol === "n" || Symbol === "N") {
    }

    else {
        window.alert("Please enter y or n.")
        return promptSymbol();
    }
    };
    promptSymbol();
    
    if (validCharacters === "") {
        window.alert ("Please select at least 1 character type!")
        return getCharacterSet();
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