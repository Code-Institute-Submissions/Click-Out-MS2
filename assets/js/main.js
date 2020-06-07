    
// DOM Variables 

const restButton  = document.getElementsByClassName("reset-button");
const grid  =  document.getElementsByClassName("reset-button");


//variables 
let timerCountdown;
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
    
    timerCountdown =  setInterval (function () {
  if(startingTime <= -1){
    clearInterval(timerCountdown);
  } else {
    document.getElementById("seconds").innerHTML = startingTime;
  }
  startingTime -= 1;
}, 500);
  
}); 

 

/** Countdown timer  Function taken from stackoverflow questions and adapted **/
 


/*

// click function  for click each grid

$ ("div .grid-column"). on ("click", function (){
 console.log("i just clicked a square"); 
$ (this).addClass("color");
clickedSquares.push(
    $ (this));
}); */
