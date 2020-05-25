    //landing page

$ (document).ready(function () {
    $("#logo").hide().fadeIn(3000);
    $("#game-title").delay(1500).hide().slideDown();
    $(".instruction-container").delay(2000).hide().slideDown()
    $(".start-button").delay(2600).hide().fadeIn();   

});

     // DOM Variables 

const startButton = document.getElementsByClassName("start-button");
const restButton  = document.getElementsByClassName("reset-button");
const showLevelDiv = document.getElementsByClassName("level-div");



//variables 
let gameGrid = document.getElementById("grid-column");



// Event listener 
 

$(".start-button").click(function() {
    $(".start-button").hide();
    $(".instruction-container").delay(700).slideUp();
    

  });