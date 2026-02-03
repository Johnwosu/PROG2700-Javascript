
console.log("=============================")
console.log("Welcome to the String Program")
console.log("=============================")

// 1st, declare a function with str as the parameter//
function reWord(str) {
  // declare the variables of initial and last Char
  // .at() was chosen because it allows the use of negative indexing// 
  let initialChar = str.at(0);  //index str.at(0) refer to the initial character
  
  let lastChar = str.at(-1);  //index str.at(-1) refer to the last character


  if (initialChar.toLowerCase() === lastChar.toLowerCase()) {  // .toLowerCase is used here to ignore case otherwise capital 
    // "T" and lower "t" are not the same.//
    return str.split("").reverse().join(""); //To reverse a string in javascript, have to first split into arrays, 
    // reverse the arrays and then join back into a string// 
} else {
    return str.slice(1, -1); //Else return the word skipping the first char index[0], and the last index[-1]
  }
}
// The function calling happens here
console.log(reWord("Triscuit")); // tiucsirT
console.log(reWord("Cracker"));  // racke
console.log(reWord("Ifeanyi"));  // iynaefI

// Resource: 
// https://www.w3schools.com/js/js_string_methods.asp //
