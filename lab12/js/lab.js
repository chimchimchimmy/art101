// index.js - Lab 12: Conditionals
// Date: November 14, 2024

//Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
//depending on length mod 44
function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "GRYFFINDOR"
    }
    else if (mod == 1) {
        return "RAVENCLAW"
    }
    else if (mod == 3) {
        return "SLYTHERIN"
    }
    else if (mod == 3) {
        return "HUFFLEPUFF"
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})

// attach click handler to submit button
$("button").click(function(){
    console.log("Button clicked");
    // get the value in the #input text box, assign to a variable name
    var name = $("#input").val()
    crossOriginIsolated.log("Name: " + name);
    // get the house
    var house = sortingHat(name);
    console.log("House: " + house);
    //add house to output div
    $("#output").html("<h1>" + house + "</h1>");
})