$(document).ready(function () {
    const apiURL = "https://xkcd.com/info.0.json";

    $.ajax({
        url: apiURL,
        type: "GET",
        dataType: "json",
        success: function (comicObj) {
            console.log("XKCD Comic Data:", comicObj);

            const title = $("<h3>").text(comicObj.title);
            const img = $("<img>").attr("src", comicObj.img).attr("alt", comicObj.alt).attr("title", comicObj.alt);
            const caption = $("<p>").text(comicObj.alt);

            $("#output").append(title, img, caption);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("Error fetching XKCD comic:", textStatus, errorThrown);
        }
    });
});