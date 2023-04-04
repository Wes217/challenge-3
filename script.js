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


// var len = prompt('how many characters in password');



// Number.isNaN(Number(len))
// if (Number.isNaN){
//   alert(len +'is not a number');
//   var len = prompt('how many characters in password');
// }
// var useLower= confirm('include')
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var Numbers = '1234567890'
var Special = '!@#$%^&*()'
function generatePassword(){
  var characters = '1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var len = prompt('how many characters in password');
  password = '';
  // console.log(len);
  len = Number(len);
  // // console.log(len);
  //--------------------Alert
  while (len > 128 || len < 8 || len == NaN){
    alert(len +'is not a valid');

    len = prompt('how many characters in password');
    len = Number(len);
  }
  //--------------------lowerCase
  var useLower= confirm('include Lower case')
  if (useLower == false){
    characters = characters.replace(lowerCase,'')
    // console.log(characters)
  }
  //--------------------upperCase
  var useUpper= confirm('include Upper case')
  if (useUpper == false){
    characters = characters.replace(upperCase,'')
    // console.log(characters)
  }
  //--------------------Numbers
  var useNum = confirm('include Numbers')
  if (useNum == false){
    characters = characters.replace(Numbers,'')
    // console.log(characters)
  }
  //--------------------Special
  var useSpecial = confirm('Include special characters' )
  if (useSpecial == false){
    characters = characters.replace(Special,'')
    // console.log(characters)
  }

  // while()





  //--------------------All Characters
  for(var i = 0; i< len; i++){
    var randomIndex = Math.floor(Math.random()*characters.length)
    // console.log(randomIndex)
    password += characters.substring(randomIndex, randomIndex+1,)
    // console.log (password)
    
  }
  //--------------------Ending password
  console.log = (password)
  return password
}