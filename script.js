/*global $*/

var divAmount = 4;
var color = "grey";

$(document).ready(function() {
    for(var i = 0; i < divAmount*divAmount; i++) {
        $(".container").append("<div class='" + i + " block'></div>");
    }
    
    $(".block").hover(function() {
        $(this).css("background-color", color)
    });
    
    divAmount = $("input").val();
});

function clear() {
    for(var i = 0; i < divAmount*divAmount; i++) {
        
    }
}