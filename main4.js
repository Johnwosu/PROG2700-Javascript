console.log("===================================")
console.log("Welcome To Random and Prime Program")
console.log("====================================")

// Declare a function to check for prime numbers
function checkPrime(num) {
    // Prime numbers must be greater than 1.
    // 1, 0, and negative numbers are NOT prime.
    if (num <= 1) {
        return false; // Immediately return "not prime"
    }

    // We test all numbers from 2 up to (num - 1)
    // If any of these divide evenly into num, then num is NOT prime.
    for (var i = 2; i < num; i++) {

        // The modulus operator (%) gives the remainder.
        // If remainder is 0, num is divisible by i → not prime.
        if (num % i === 0) {
            return false; // Found a divisor → not prime
        }
    }
    // If the loop finishes with no divisors found,
    // then the number IS prime.
    return true;
}
// declare a function of array to get the numbers
function myArray() {
    // Create an empty array that will store our random numbers
    var numbers = [];

    // Keep generating numbers until we have 10 unique numbers
    while (numbers.length < 10) { 

        // Generate a random number between 1 and 200
        // Math.random() → a decimal between 0 and 1 (e.g., 0.47)
        // Multiply by 200 → a decimal between 0 and 200
        // Math.floor(...) → rounds down to nearest whole number (0–199)
        // +1 → shifts the range to 1–200 instead of 0–199
        var randomNum = Math.floor(Math.random() * 200) + 1;

        // Check if randomNum is not already in the array
        if (!numbers.includes(randomNum)) {
            
            // If number is unique (not already in the array), add it to the array
            numbers.push(randomNum);
        }      // If number already exists, do nothing and loop again
               // This ensures no repeated numbers in the array
    }
    // Once we have 10 unique numbers, return the array
    return numbers;
}

// declare the output function
function outputString() {
    
    // Calling the myArray function here, make the numbers available here
    var numbers = myArray();

    // This variable will store the final text we print
    var output = "";

    // Loop through all 10 numbers in the array
    for (var j = 0; j < numbers.length; j++) {

    // Get the current number from the array
    var num = numbers[j];

    // Call our checkPrime() function to check the number
    if (checkPrime(num)) {
        // If prime, add "number-yes" to the output
        output += num + "-yes, ";
    } else {
        // If not prime, add "number-no" to the output
        output += num + "-no, ";
    }
    }
    return output;  // return the output
}
var output = outputString();    // Call the function to work

// PRINT THE FINAL RESULT TO THE CONSOLE
console.log(output);

//Resources:
//https://github.com/W0246645/PROG2700_Assign1B
//https://www.w3schools.com/JS/js_array_iteration.asp
//https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript

