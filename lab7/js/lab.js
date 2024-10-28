// index.js - Lab 7: Functions
// Author: Stephanie Lipe
// Date: October 24, 2024


// sortUserName
function sortUserName() {
    // Prompt the user to enter their name
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);

    // Convert the string into an array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

    // Sort the array alphabetically
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    // Join the sorted array back into a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    // Return the sorted name
    return nameSorted;
}

// Output the sorted name to the document
document.writeln("Oh hey, I've fixed your name: " + sortUserName() + "<br>")
