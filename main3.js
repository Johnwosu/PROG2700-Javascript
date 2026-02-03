console.log("==================================")
console.log("Welcome to Dates and Maths Program")
console.log("==================================")
// Month is indexed (0-based) in JavaScript (0 = January, 11 = December)
// Example: 2 = March
var birthdayMonth = 2;  

// Day of the month for your birthday
var birthdayDay = 15;   

// GET TODAY'S DATE AND TIME  //
// Create a Date object representing right now
var now = new Date();

// CREATE A DATE FOR THE NEXT BIRTHDAY //
// Build a date for your birthday THIS YEAR at midnight (00:00:00)
var myNextBirthday = new Date(
    now.getFullYear(),   // now, is a Date object usually created with new Date. 
    // .getFullYear is a built‑in method that returns the four‑digit year (current) from that date

    birthdayMonth,       // the month of your birthday (0–11)
    birthdayDay,         // the day of the month (1–31)
    0, 0, 0              // time set to midnight
);
// If today's date is already past this year's birthday,
// then change the birthday to NEXT YEAR
if (myNextBirthday < now) {
    myNextBirthday.setFullYear(myNextBirthday.getFullYear() + 1); //.setFullYear() is an inbuilt 
    // method that automatically updates the year to next year
}
// Difference in milliseconds between now and your next birthday
var diff = myNextBirthday - now;
/* 
In JavaScript, subtracting one Date object from another 
converts both to timestamps and returns the difference in milliseconds.
*/

// CONVERT MILLISECONDS INTO TIME UNITS //
var seconds = Math.floor(diff / 1000);  // Convert milliseconds → seconds
// 1000 milliseconds equal one second

var minutes = Math.floor(seconds / 60); // Convert seconds → minutes
//Math.floor() drops the decimal portion so you get clean whole numbers
var hours = Math.floor(minutes / 60);   // Convert minutes → hours
var days = Math.floor(hours / 24);      // Convert hours → days
var weeks = Math.floor(days / 7);       // Convert days → weeks

// CALCULATE REMAINDERS //
days = days % 7;            // Remaining days after removing full weeks
// % is modulus operator that returns the remainder
hours = hours % 24;         // Remaining hours after removing full days
minutes = minutes % 60;     // Remaining minutes after removing full hours
seconds = seconds % 60;     // Remaining seconds after removing full minutes

// Print the final message to the console
console.log(
    "There are " +
    weeks + " weeks, " +
    days + " days, " +
    hours + " hours, " +
    minutes + " minutes, and " +
    seconds + " seconds until my next birthday!"
);
//Resources:
//https://stackoverflow.com/questions/9407426/calculate-number-of-weeks-days-and-hours-from-milliseconds
//https://www.w3schools.com/js/js_dates.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

