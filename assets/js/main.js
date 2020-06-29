    
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
let levels = document.getElementById("number")

    
    
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


/*
* Start game on click function*
*removes the start button*
*starts the first level of the game*
* start timer for the first level of game*

*/
 $(".start-button").on("click", function (){

    $(".start-button").hide();

    setTimeout(function(){ document.getElementById("number").innerHTML = "1"; }, 1000)
    timer();

}); 

let seconds = 21;


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
        resetGame();
    }
  else if(seconds > 0 && clickedSquares.length == 9 && level == 1){
        timer();
        document.getElementById("number").innerHTML = "2";
        document.getElementById("seconds").innerHTML= "20";
  
        $("#level1").addClass("hide-grid").delay(1500);
        $("#level2").delay(1500).removeClass("hide-grid").slideDown();  
        seconds = 20;
        clickedSquares = [];
        level = 2;

    }
  else if(seconds > 0 && clickedSquares.length == 12 && level == 2){
        timer();
        document.getElementById("number").innerHTML = "3";
        document.getElementById("seconds").innerHTML= "20";

        $(".grid-column").css("margin","10px");
        $("#level2").delay(1500).addClass("hide-grid");
        $("#level3").delay(2000).removeClass("hide-grid").slideDown(); 
        seconds = 20;
        clickedSquares.length = 0;
        level = 3;

    }
   else if(seconds > 0 && clickedSquares.length == 16 && level == 3){
        document.getElementById("number").innerHTML = "4";
        document.getElementById("seconds").innerHTML= "20";

        timer(); 
        $(".grid-column").css("margin","10px");
        $("#level3").delay(1500).addClass("hide-grid");
        $("#level4").delay(2000).removeClass("hide-grid").slideDown(); 
        
        seconds = 20;
        clickedSquares = [];
        level = 4;

    }
   else if(seconds > 0 && clickedSquares.length == 15 && level == 4){
        document.getElementById("number").innerHTML = "5";
        document.getElementById("seconds").innerHTML= "20";

        timer(); 
        $(".grid-column").css("margin","60px");
        $("#level4").delay(1500).addClass("hide-grid");
        $("#level5").delay(2000).removeClass("hide-grid").slideDown(); 
         
        seconds = 20;
        clickedSquares = [];
        level = 5;


    } 
     else if(seconds > 0 && clickedSquares.length == 20 && level == 5){
        document.getElementById("number").innerHTML = "6";
        document.getElementById("seconds").innerHTML= "20";
 
        timer();
        $(".grid-column").css("margin","25px");
        $("#level5").delay(1500).addClass("hide-grid");
        $("#level6").delay(2000).removeClass("hide-grid").slideDown();
        
        seconds = 20;
        clickedSquares = [];
        level = 6;
    } 

else if(seconds > 0 && clickedSquares.length == 21 && level == 6){
        document.getElementById("number").innerHTML = "7";
        document.getElementById("seconds").innerHTML= "20";

        $(".grid-column").css("margin","25px");
        $("#level6").delay(1500).addClass("hide-grid");
        $("#level7").delay(2000).removeClass("hide-grid").slideDown();
        timer();
        seconds = 20;
        clickedSquares = [];
        level = 7;
    } 
    else if(seconds > 0 && clickedSquares.length == 25 && level == 7){
        document.getElementById("number").innerHTML = "8"; 
        document.getElementById("seconds").innerHTML= "20";

        $(".grid-column").css("margin","25px");
        $("#level7").delay(1500).addClass("hide-grid");
        $("#level8").delay(2000).removeClass("hide-grid").slideDown();
        timer();
        seconds = 20;
        clickedSquares = [];
        level = 8;
    }
    else if(seconds > 0 && clickedSquares.length == 30 && level == 8){
        document.getElementById("number").innerHTML = "9";
        document.getElementById("seconds").innerHTML= "20";
 
        $(".grid-column").css("margin","25px");
        $("#level8").delay(1500).addClass("hide-grid");
        $("#level9").delay(2000).removeClass("hide-grid").slideDown();
        timer();
        seconds = 20;
        clickedSquares = [];
        level = 9;
    }
    else if(seconds > 0 && clickedSquares.length == 28 && level == 9){
        document.getElementById("number").innerHTML = "10";
        document.getElementById("seconds").innerHTML= "20";
        $(".grid-column").css("margin","25px");
        $("#level9").delay(1500).addClass("hide-grid");
        $("#level10").delay(2000).removeClass("hide-grid").slideDown();
        timer();
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

function resetGame (){
    $(".reset-button").slideDown();

   $(".reset-button").on("click", function (){
       console.log("ENTERING THE CLICK FUNCTION");
       console.log("START BUTTON SHOULD HAVE APPEARED");
       $("#level").slideUp(); 
       $("#time").slideUp();
       $(".reset-button").remove();
       $("#game-win").remove();
       
       pageReload();
    });
 
};

/** gameOver function */

function gameOver(){
    $("#game-over").slideDown();
    $("#level").slideUp(); 
    $("#time").slideUp();
}

/** PageReload function  */

function pageReload(){ 
    location.reload();
};


