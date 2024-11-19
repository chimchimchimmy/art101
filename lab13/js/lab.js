// index.js - Lab 13: Loops
// Author: Stephanie Lipe
// Date: November 18, 2024


function fizzBuzz() {
    let oneLongString = "";

    for (let num = 1; num <= 200; num++) {
        let output = `${num} `;
        if (num % 3 === 0) output += "Fizz!";
        if (num % 5 === 0) output += "Buzz!";
        if (num % 7 === 0) output += "Boom!";
        oneLongString += `<div>${output}</div>`;
    }

    $("#output").html(oneLongString);
}

fizzBuzz();