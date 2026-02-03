console.log("=====================================")
console.log("Welcome to the Longest Streak Program")
console.log("=====================================")

// Returns the sum of the longest consecutive number streak
function longestNumberStreakSum(arr) {

    // Need at least 2 numbers for a streak
    if (arr.length < 2) return 0;

    // Best streak found so far
    let longestLength = 0, largestSum = 0;

    // Track current active streak
    let currentLength = 1, currentSum = arr[0];

    // Start looping from the second element in the array (index 1)
    // because we need to compare each element with the one directly before it.
    for (let i = 1; i < arr.length; i++) {

        if (arr[i] === arr[i - 1] + 1) {    //This checks whether the current number is exactly one greater 
        // than the previous number. In other words, it checks if the numbers are consecutive.

            // Since the streak continues, increase the streak length counter.
            currentLength++;

            // Add the current number to the running sum of the streak.
            currentSum += arr[i];

        } else {   // Streak ended — compare it with the best so far

            // Update the best streak if:
            // 1. The new streak is longer, OR
            // 2. The new streak has the same length but a larger sum.
            if (
                currentLength > longestLength ||
                (currentLength === longestLength && currentSum > largestSum)
            ) {
                // Save the new streak as the best one.
                longestLength = currentLength;
                largestSum = currentSum;
            }
            // Reset streak tracking to start a NEW streak beginning at the current number.
            currentLength = 1;        // Restart streak length with 1 (just this number)
            currentSum = arr[i];      // Restart streak sum with this current value
        }
    }
    // Check the final streak since the loop doesn't compare it
    if (
        // Check if the last streak is better than the best streak found
        currentLength > longestLength ||

        // If both streaks have the same length, we keep the one with the bigger sum
        (currentLength === longestLength && currentSum > largestSum)
    ) {
        // Store the last streak as the new best streak
        longestLength = currentLength;
        largestSum = currentSum;
    }
    // Return 0 if no valid streak (length < 2), otherwise return sum
    return longestLength < 2 ? 0 : largestSum;
}

// Test outputs
console.log(longestNumberStreakSum([100, 101, 102, 3, 4, 5, 6, 9]));
console.log(longestNumberStreakSum([1, 7, 9, 20, 7, 12]));
console.log(longestNumberStreakSum([3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3]));
console.log(longestNumberStreakSum([1,2,3,4,5,6,7,8,9,10]));


// Resources
//https://www.w3schools.com/js/js_arrays.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
