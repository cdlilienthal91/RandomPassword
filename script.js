//Given
var generateBtn = document.querySelector("#generate");

//Establish Password Length
function generatePassword() {
  var passLength = prompt("Please select a Password Length, *NOTE, your password must be between 8 and 128 charactors long.");
  
  if (passLength < 8 || passLength > 128 ) {
    alert("The length of your password must be between 8 and 128 characters long.");
    return generatePassword();
  }
  if (passLength >=8 && passLength <= 128) {

  //Establish Password Criteria
  var num = confirm("Do you want Numbers in your Password? Click OK for Yes, Cancel for No. ");
  var lowerChar = confirm("Do you want lowercase letters in your Password? Click OK for Yes, Cancel for No.");
  var upperChar = confirm("Do you want UPPERCASE LETTERS in your Password? Click OK for Yes, Cancel for No.");
  var speChar = confirm("Do you want $pec!al Characters in your Password? Click OK for Yes, Cancel for No.");
  }
  //Makes user answer Criteria Selection
  if (speChar===false && num===false && lowerChar===false && upperChar===false) {
    alert("Please Confirm Criteria!");
    return generatePassword();
  }
  //Criteria Array if arguments
  if (speChar) {
    var speChar = ["!@#$%^&*()"];
  }
  if (speChar===false) {
    var speChar = [""];
  }
  if (num) {
    var num = ["0123456789"]
  }
  if (num===false) {
    var num = [""]
  }
  if (lowerChar) {
    var lowerChar = ["abcdefghijklmnopqrstuvwxyz"]
  }
  if (lowerChar===false) {
    var lowerChar = [""]
  }
  if (upperChar) {
    var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  }
  if (upperChar===false) {
    var upperChar = [""]
  }
  //variable Created via Criteria input to Create Password
  var randomChar = speChar + num + lowerChar + upperChar

  //Loop for password length 
  var password = "";
  for (var i =0; i < passLength; i++) {
    var trueRandom = randomChar[Math.floor(Math.random() * randomChar.length)];
    password += trueRandom;
  }
  //Password Return
  return password
}
//Given
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//Given
generateBtn.addEventListener("click", writePassword);