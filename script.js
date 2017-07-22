/*global $*/

var divAmount = 4;
var color = "grey";

/*
    Must fix the hover listener function
    Stops listening when a new grid is created
*/

$(document).ready(function() {
    createGrid(divAmount*divAmount);
    
    $(".block").hover(function() {
        $(this).css("background-color", color);
    });
    
    $(".btn").click(function() {
        deleteGrid();
        createGrid(divAmount*divAmount);
    });
});

function clear() {
    for(var i = 0; i < divAmount*divAmount; i++) {
        $("." + i).css("background-color", "black");
    }
}

function createGrid(size) {
    for(var i = 0; i < size; i++) {
        $(".container").append("<div class='" + i + " block'></div>");
    }
    
    $(".block").css("width", 512 / Math.sqrt(size));    
    $(".block").css("height", 512 / Math.sqrt(size));
}

function deleteGrid() {
    $(".block").remove();
}