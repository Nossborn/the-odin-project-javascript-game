/*global $*/

var divAmount = 4;
var color = "grey";

$(document).ready(function() {
    createGrid(divAmount*divAmount);
    
    $(".clr-btn").click(function() {
        deleteGrid();
        createGrid(divAmount*divAmount);
    });
    
    $("input").on("keydown", function(e) {
        if(e.keyCode == 13) {
            divAmount = $("input").val();
            deleteGrid();
            createGrid(divAmount*divAmount);
            $(this).blur();
        }
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
    
    $(".block").hover(function() {
    $(this).css("background-color", color);
    });
}

function deleteGrid() {
    $(".block").remove();
}

