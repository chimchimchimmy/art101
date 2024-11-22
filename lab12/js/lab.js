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
    else if (mod == 2) {
        return "SLYTHERIN"
    }
    else if (mod == 3) {
        return "HUFFLEPUFF"
    }
}

$("#button").click(function() {
    let name = $("#input").val();
    console.log("Name: " + name);
    let house = sortingHat(name);
    console.log("House: " + house);
    $("#output").html("<h1>" + house + "</h1>")
})