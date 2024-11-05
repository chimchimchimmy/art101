// index.js - Lab 9: Libraries & jQuery
// Author: Stephanie Lipe
// Date: October 30, 2024

$(document).ready(function() {
    // Append "Toggle Highlight" buttons to specific sections
    $("#challenge, #problems, #reflection, #results").append("<button class='highlight-button'>Toggle Highlight</button>");

    // Add click event to toggle the "special" class for each section button
    $(".highlight-button").click(function() {
        $(this).parent().toggleClass("special");
    });
});