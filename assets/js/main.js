    //landing page

$ (document).ready(function () {
    $(".grid-column").addClass("visibility");
    $("#logo").hide().fadeIn(3000);
    $("#game-title").delay(1500).hide().slideDown();
    $(".instruction-container").delay(2000).hide().slideDown()
    $(".start-button").delay(3500).hide().fadeIn();   

});

     // DOM Variables 

const startButton = document.getElementsByClassName("start-button");
const restButton  = document.getElementsByClassName("reset-button");
const instructionBox = document.getElementsByClassName("instruction-container");


//variables 
let gameGrid = document.getElementsById("grid-column")


// Event listener 
 
