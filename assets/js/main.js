    
// DOM Variables 

const startButton = document.getElementsByClassName("start-button");
const restButton  = document.getElementsByClassName("reset-button");
const grid  =  document.getElementsByClassName("reset-button");

//variables 
let getLevels = ""
let gameTimer;
clickedSquares = [];
let gridChange ;
let winMessage;
let loseMessage;
let getInstructionContainer = document.getElementsByClassName("instruction-container");
    
    
    //landing page

$ (document).ready(function () {
    $("#logo").slideDown(2000);
    $("#game-title").delay(1500).slideDown();
    $(".instruction-container").delay(2000).slideDown();
    $(".instruction-container").delay(1000).slideUp();
}); 

/*
 
// click function when the the start button is pressed. Removes button/instruction and shows grid to start game.

$(".start-button").click(function() {
    $(".start-button").hide();
    $(".instruction-container").delay(700).slideUp();
    $(".level-div").delay(900).slideDown();
    $(".grid-column").delay(1500).css("visibility","visible").slideDown();

});


// click function  for click each grid

$ ("div .grid-column"). on ("click", function (){
 console.log("i just clicked a square"); 
$ (this).addClass("color");
clickedSquares.push(
    $ (this));
}); */
