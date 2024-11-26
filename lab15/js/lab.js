// index.js - Lab 15: AJAX
// Author: Stephanie Lipe
// Date: November 25, 2024

$("#fetchJoke").on("click", function () {
    $.ajax({
        url: "https://api.chucknorris.io/jokes/random",
        type: "GET",
        dataType: "json",
        success: function (data) {
            $("#output").html(`<p>${data.value}</p>`);
            console.log("Joke fetched successfully:", data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $("#output").html(`<p>Error fetching joke: ${textStatus}</p>`);
            console.error("Error fetching joke:", textStatus, errorThrown);
        },
    });
});