// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// var len = prompt('how many characters in password');



// Number.isNaN(Number(len))
// if (Number.isNaN){
//   alert(len +'is not a number');
//   var len = prompt('how many characters in password');
// }
// var usLower= confirm('include')

var characters = '1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// console.log(characters.length)
function generatePassword(){
  var len = prompt('how many characters in password');
  password = '';
  // console.log(len);
  len = Number(len);
  // console.log(len);
  //--------------------lowerCase
  var usLower= confirm('include Lower case')
  if (usLower == false){
    characters = characters.replace('abcdefghijklmnopqrstuvwxyz','')
    // console.log(characters)
  }
  //--------------------
  //--------------------All Characters
  for(var i = 0; i< len; i++){
    var randomIndex = Math.floor(Math.random()*characters.length)
    // console.log(randomIndex)
    password += characters.substring(randomIndex, randomIndex+1,)
    // console.log (password)
    
  }
  //--------------------
  //--------------------Ending password
  console.log = (password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}