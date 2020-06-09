    
// DOM Variables 

const restButton  = document.getElementsByClassName("reset-button");



//variables 
let squares;
let grid = true;
let startButton = document.getElementsByClassName("start-button");
let startingTime = 30;
let getLevels = ""
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
    $(".start-button").delay(3000).slideDown();
    $(".instruction-container").delay(1000).slideUp();
    $(".grid-column").delay(1500).css("visibility","visible").slideDown();
    $("#level").delay(900).slideDown();
    $("#time").delay(900).slideDown();

}); 


/*
* Start game on click function*
*removes the start button*
*starts the first level of the game*
* start timer for the first level of game*

*/
 $ (" .start-button"). on ("click", function (){

    $(".start-button").remove();

    document.getElementById("number").innerHTML = "1";

    timerCountdown();

}); 
  /** grid column on click function **/

 $ (".grid-column").on("click", function(){
 clickSquares();

}); 
  
/** Countdown timer  Function taken from stackoverflow questions and adapted **/

  function timerCountdown(){ setInterval (function () {
  if(startingTime <= -1){
    clearInterval();
  } else {
   document.getElementById("seconds").innerHTML = startingTime;
  }
  startingTime -= 1;
 }, 500);};
  
  $ (".grid-column").on("click", function(){
 clickSquares();

}); 
  
/** function to removes each square when clicked**/


function clickSquares() {
 squares  = $ (".grid-column").on("click", function(){
 console.log("i just clicked a square"); 
 $(this).remove();

});

};

