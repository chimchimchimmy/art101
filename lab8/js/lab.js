// index.js - Lab 8: Anon Functions and Callbacks
// Author: Stephanie Lipe
// Date: October 28, 2024


// Array of numbers
var numbers = [10, 81, 4, 16, 42, 144, 10000];

// Named function that checks if a number is even
function isEven(x) {
    return x % 2 === 0;
}

// Test for evenness using map
var evennessResults = numbers.map(isEven);
console.log("Test of evenness of array: ", evennessResults);

// Anonymous function that calculates the square root
var sqrtResults = numbers.map(function(x) {
    return Math.sqrt(x);
});
console.log("Squareroot of array: ", sqrtResults);

// Log the original array in the console
console.log("Original array: ", numbers);

// Generate the HTML to display the results
var outputHTML = `
    <p>Original array: [${numbers.join(', ')}]</p>
    <p>Evenness of array: [${evennessResults.join(', ')}]</p>
    <p>Squareroots of array: [${sqrtResults.join(', ')}]</p>
`;

// Set the HTML content of the output div
document.getElementById('output').innerHTML = outputHTML;