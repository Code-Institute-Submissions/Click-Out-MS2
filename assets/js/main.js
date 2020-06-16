    
// DOM Variables 

const restButton  = document.getElementsByClassName("reset-button");



//variables 
let squares;
let startButton = document.getElementsByClassName("start-button");
let getLevels = ""
clickedSquares = [];
let winMessage;
let loseMessage;
let instructionBox = document.getElementsByClassName("instruction-container");
let clickNumber;
const grid = document.getElementsByClassName("grid-column")
const messageBoard = document.getElementsByClassName("message")


    
    
    //landing page

$ (document).ready(function () {
    $("#logo").slideDown(2000);
    $("#game-title").delay(1500).slideDown();
    $(".instruction-container").delay(2000).slideDown();
    $(".start-button").css("bottom","300px").delay(3000).slideDown();
    $(".instruction-container").delay(1000).slideUp();
    $("#level").delay(900).slideDown();//commment this out later 
    $("#time").delay(900).slideDown();

}); 


/*
* Start game on click function*
*removes the start button*
*starts the first level of the game*
* start timer for the first level of game*

*/
 $ (".start-button"). on ("click", function (){

    $(".start-button").remove();

    document.getElementById("number").innerHTML = "1";
    
    timer();

}); 

let seconds = 20 ;


/** function to removes each square when clicked**/

function timer(){

if(seconds == 20 && clickedSquares.length == 0){
 let countDown = setInterval(function(){
  seconds = seconds - 1;
  document.getElementById("seconds").innerHTML= seconds;
  if (seconds == 0){
    clearInterval(countDown);
      }
      playingGame();
    }, 1000);
  }
}
 /**gameover function */

function playingGame(){
    if(seconds == 0 && clickedSquares.length <9){
        $("#game-over").slideDown();
    }
}
  
/** function to removes each square when clicked**/

$ (".grid-column").on("click", function(){
   console.log("i just clicked a square"); 
   clickedSquares.push( $ (this)) 
   $(this).remove();
});


/** second Level function */

function secondLevel(){
     $("level1").delay(1500).addClass("hide").slideDown();
     $("level1").delay(1500).addClass("hide").slideDown();
}





