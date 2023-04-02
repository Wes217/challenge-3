// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var len = prompt('how many characters in password');

console.log(len);

var len = Number(len);
console.log(len);

// Number.isNaN(Number(len))

// if (Number.isNaN){
//   alert(len +'is not a number');
//   var len = prompt('how many characters in password');
// }

// var usLower= confirm('include')

function generatePassword(){
  



}