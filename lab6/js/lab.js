// index.js - Lab 6: Arrays and Objects
// Author: Stephanie Lipe
// Date: October 24, 2024

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

// Define Variables
myTransport = ["car", "bus", "walk", "other peoples' cars"];

// create an object for my main ride
myMainRide = {
  make: "Kia",
  model: "Forte",
  color: "White",
  year: "2019",
  age: function() {
      return 2024 - this.year;
  }
}

// output
document.writeln("Kinds of transport I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
JSON.stringify(myMainRide, null, '\t'), "</pre>");
