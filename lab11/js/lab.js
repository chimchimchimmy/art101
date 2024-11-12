// index.js - Lab 11: Javascript Events and Forms
// Author: Stephanie Lipe
// Date: November 11, 2024

function sortString(inputString) {
  return inputString.split('').sort().join('');
}

$("#submit").click(function() {
    const userName = $("#user-name").val();
    const userNameSorted = sortString(userName);
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});