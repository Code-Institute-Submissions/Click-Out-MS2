    
// DOM Variables 

const resetButton  = document.getElementsByClassName("reset-button");



//variables 
let squares;
let startButton = document.getElementsByClassName("start-button");
let getLevels = ""
let clickedSquares = [];
let winMessage;
let loseMessage;
let instructionBox = document.getElementsByClassName("instruction-container");
let clickNumber;
const grid = document.getElementsByClassName("grid-column")
const messageBoard = document.getElementsByClassName("message")
let level = 1;
let seconds = 21;
let levels = document.getElementById("number");


    
    
    //landing page

$ (document).ready(function () {
    $("#logo").slideDown(2000);
    $("#game-title").delay(1500).slideDown();
    $(".instruction-container").delay(2000).slideDown();
    $(".start-button").delay(3000).slideDown();
    $(".instruction-container").delay(1000).slideUp();
    $("#level").delay(3850).slideDown(); 
    $("#time").delay(3850).slideDown();

});

/* next level function */
 function go_to_level(previousLevel, level){
	document.getElementById("number").innerHTML = level;
    document.getElementById("seconds").innerHTML= "20";
    $("#level"+ previousLevel).css("display","none").delay(1500);
    $("#level"+level).delay(1500).css("display","inline-block").slideDown();  
};

/*
* Start game on click function*
*removes the start button*
*starts the first level of the game*
* start timer for the first level of game*

*/
  
      $(".start-button").on("click", function (){

       $(".start-button").hide();
       timer();
       firstLevel();

    });



/**fristLevel function */
 function firstLevel(){
 $("#level1").css("display","inline-block").slideDown();    
 setTimeout(function(){ document.getElementById("number").innerHTML = "1"; }, 1000)

 }


/** function to removes each square when clicked**/

function timer(){
    if(seconds == 21 && clickedSquares.length == 0){
        let countDown = setInterval(function(){
            seconds = seconds - 1;
            document.getElementById("seconds").innerHTML= seconds;
            if (seconds == 0){
                clearInterval(countDown);
            }
            playingGame();
        }, 500);
     click();
    }
}

 /** playingGame function*/

function playingGame(){
    if(seconds == 0 && clickedSquares.length < 9 ){
        gameOver();
    }
  else if(seconds > 0 && clickedSquares.length == 9 && level == 1){
        timer();
        go_to_level(1,2);
        seconds = 20;
        clickedSquares = [];
        level = 2;

    }
  else if(seconds > 0 && clickedSquares.length == 12 && level == 2){
        timer();
        $(".grid-column").css("margin","10px"); 
        go_to_level(2,3);
        seconds = 20;
        clickedSquares.length = 0;
        level = 3;

    }
   else if(seconds > 0 && clickedSquares.length == 16 && level == 3){
        timer(); 
        $(".grid-column").css("margin","10px");
        go_to_level(3,4);
        seconds = 20;
        clickedSquares = [];
        level = 4;

    }
   else if(seconds > 0 && clickedSquares.length == 15 && level == 4){
        timer(); 
        $(".grid-column").css("margin","60px");
        go_to_level(4,5);
        seconds = 20;
        clickedSquares = [];
        level = 5;


    } 
     else if(seconds > 0 && clickedSquares.length == 20 && level == 5){
        timer();
        $(".grid-column").css("margin","25px");
        go_to_level(5,6); 
        seconds = 20;
        clickedSquares = [];
        level = 6;
    } 

else if(seconds > 0 && clickedSquares.length == 21 && level == 6){
        timer();
         $(".grid-column").css("margin","25px");
        go_to_level(6,7);
        seconds = 20;
        clickedSquares = [];
        level = 7;
    } 
    else if(seconds > 0 && clickedSquares.length == 25 && level == 7){
        timer();
        $(".grid-column").css("margin","25px");
        go_to_level(7,8);
        seconds = 20;
        clickedSquares = [];
        level = 8;
    }
    else if(seconds > 0 && clickedSquares.length == 30 && level == 8){
        timer();
         $(".grid-column").css("margin","25px");
        go_to_level(8,9);
        seconds = 20;
        clickedSquares = [];
        level = 9;
    }
    else if(seconds > 0 && clickedSquares.length == 28 && level == 9){
        timer();
        $(".grid-column").css("margin","25px");
        go_to_level(9,10);
        seconds = 20;
        clickedSquares = [];
        level = 10;
    }
    else if(seconds > 0 && clickedSquares.length == 35 && level == 10){
        $("#game-win").slideDown();
        resetGame();
    }
}

/** function to removes each square when clicked**/
   function click () {
        $ (".grid-column").on("click", function(){ 
          console.log(clickedSquares);
          clickedSquares.push($(this));
          $(this).remove();
        });
    }

/**resetGame function*/

function resetGame(){
    $(".reset-button").slideDown();

   $(".reset-button").on("click", function (){
       $("#level").slideUp(); 
       $("#time").slideUp();
       $(".reset-button").remove();
       $("#game-win").remove();
       $(".start-button").slideDown();
        $("#game-over").slideUp();
      // pageReload();
    });
 
};

/** gameOver function */

function gameOver(){
    $("#game-over").slideDown();
    $("#level").slideUp(); 
    $("#time").slideUp();
    resetGame();
}

/** PageReload function  */

//function pageReload(){ 
 //   location.reload();
//};


