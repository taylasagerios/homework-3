// Assignment code here
function generatePassword(){
  console.log("generatepassword")
  let passwordLength= prompt("enter number between 8 and 128");
 console.log (passwordLength)
 let lowercase= confirm("do you want to add a lowercase letter");
 console.log (lowercase)
 let uppercase= confirm("do you want to add a uppercase letter");
 console.log (uppercase)
 let numeric= confirm("do you want to add a number");
 console.log (numeric)
 let specialcharacters= confirm("do you want to add a special character");
 console.log (specialcharacters)
 var charArray = []
 if (lowercase == true ){
  charArray += "abcdefghijklmnopqrstuvwxyz"
 }
 if (uppercase== true ){
  charArray += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 } 
 if (numeric == true ){
  charArray += "0123456789"
 }
 if (specialcharacters == true ){
  charArray += "0!@#$%^&*"
 }
 
var pw = ""
for (var x = 0; x < passwordLength; x++){
  console.log (charArray)
  var rannum = Math.random();
  console.log (rannum)
  var ranidx = rannum * charArray.length
  console.log (ranidx)
  var rouranidx = Math.floor(ranidx)
  pw += charArray [rouranidx] 

} 
return pw
}


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
