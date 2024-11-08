// index.js - Lab 9: Libraries & jQuery
// Author: Stephanie Lipe
// Date: November 7, 2024

function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  return text.slice(randStart, randStart + randLen);
}

// Event listener for the button
$("#make-convo").click(function() {
    // Get new fake dialogue
    const newText = generateRandomText();
    
    // Append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
