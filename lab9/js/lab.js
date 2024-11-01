// index.js - Lab 9: Libraries & jQuery
// Author: Stephanie Lipe
// Date: October 30, 2024

$(document).ready(function() {
    // Append a button to the Challenge section
    $("#challenge").append("<button id='button-challenge'>Make Special</button>");

    // Append a button to the Problems section
    $("#problems").append("<button id='button-problems'>Solve Problem</button>");

    // Append a button to the Reflection section
    $("#reflection").append("<button id='button-reflection'>Reflect</button>");

    // Append a button to the Results section
    $("#results").append("<button id='button-results'>Show Results</button>");

    // Add click event listener for the Challenge button
    $("#button-challenge").click(function() {
        // Toggle the "special" class on the Challenge section
        $("#challenge").toggleClass("special");
    });

    // Add click event listener for the Problems button
    $("#button-problems").click(function() {
        // Toggle the "special" class on the Problems section
        $("#problems").toggleClass("special");
    });

    // Add click event listener for the Reflection button
    $("#button-reflection").click(function() {
        // Toggle the "special" class on the Reflection section
        $("#reflection").toggleClass("special");
    });

    // Add click event listener for the Results button
    $("#button-results").click(function() {
        // Toggle the "special" class on the Results section
        $("#results").toggleClass("special");
    });
});
