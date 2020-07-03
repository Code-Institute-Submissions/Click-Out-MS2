    
// DOM Variables 


//variables 
let squares;
let startButton = document.getElementsByClassName("start-button");
let clickedSquares = [];
let instructionBox = document.getElementsByClassName("instruction-container");
const grid = document.getElementsByClassName("grid-column")
const messageBoard = document.getElementsByClassName("message")
let level = 1;
let seconds = 21;
let levels = document.getElementById("number");
let squaresPerLevel = [0,9,12,16,15,20,21,25,30,28,35]
let squareNumber;


    
    
    //landing page

$ (document).ready(function () {
    $("#logo").slideDown(2000);
    $("#game-title").delay(1500).slideDown();
    $(".instruction-container").delay(2000).slideDown();
    $(".start-button").delay(3000).slideDown();
    $("#level").delay(3850).slideDown(); 
    $("#time").delay(3850).slideDown();

});

/* next level function */
 function go_to_level(previousLevel, level){
	document.getElementById("number").innerHTML = level;
    document.getElementById("seconds").innerHTML= "20";
    $("#level"+ previousLevel).addClass("hide-grid").delay(1500);
    $("#level"+level).delay(1500).removeClass("hide-grid").slideDown(); 
    console.log("playing Game");
};

/*
* Start game on click function*
*removes the start button*
*starts the first level of the game*
* start timer for the first level of game*

*/
  
       $(".start-button").on("click", function (){
       console.log("on click function start btton clicked")
       $(this).hide();
       $(".instruction-container").slideUp();
       timer();
       firstLevel();
       console.log("start-button")

    });



/**fristLevel function */
 function firstLevel(){
 $("#level1").css("display","inline-block").slideDown();    
 document.getElementById("number").innerHTML = "1";
 console.log("FIRST LEVEL")

 }


/** function to removes each square when clicked**/

function timer(){
    if(seconds == 21 && clickedSquares.length == 0){
        console.log("TIMER")
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
     squareNumber = squaresPerLevel[level];

    if(seconds == 0 && clickedSquares.length < squareNumber ){
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


/** get reset button */
     function resetButton(){
         $(".reset-button").slideDown();
     }

/**game start again function */
function startAgain(){
    timer();
    firstLevel()
    click();
    console.log("start game again")

}


     
/**resetGame function*/
    
   $(".reset-button").on("click", function (){
       console.log("CLICKED RESET BUTTON")
       $(this).remove();
       $("#game-win").remove();
       //$(".start-button").slideDown();
       console.log("WHAT HAPPENS TO START BUTTON")
        $("#game-over").slideUp();
        //go_to_level(0,1)
        //timer();
    
        //debugger;
      // pageReload();
      startAgain();
      resetButton();
    });
 

/** gameOver function */

function gameOver(){
    $("#game-over").slideDown();
     resetGame();
     console.log("GAMEOVER")
}

/** PageReload function  */

//function pageReload(){ 
 //   location.reload();
//};


