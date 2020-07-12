
//variables 
let clickedSquares = [];
let level = 1;
let seconds = 21;
let squaresPerLevel = [0, 9, 12, 16, 15, 20, 21, 25, 30, 28, 35]
let squareNumber;



/**landing page**/

$(document).ready(function() {
    $("#logo").slideDown(2000);
    $("#game-title").delay(1500).slideDown();
    $(".instruction-container").delay(2000).slideDown();
    $(".start-button").delay(3000).slideDown();
});

/* next level function */
function go_to_level(previousLevel, level) {
    document.getElementById("number").innerHTML = level;
    document.getElementById("seconds").innerHTML = "20";
    $("#level" + previousLevel).addClass("hide");
    $("#level" + level).removeClass("hide").slideDown();
    console.log("playing Game");
}


/*
* Start game on click function*
*removes the start button*
*starts the first level of the game*
* start timer for the first level of game*

*/

$(".start-button").on("click", function() {
    console.log("on click function start btton clicked")
    $(this).hide();
    $(".instruction-container").slideUp();
    $("#level").slideDown();
    $("#time").slideDown();
    timer();
    firstLevel();
    console.log("start-button")

});



/**fristLevel function */
function firstLevel() {
    $("#level1").removeClass("hide").slideDown();
    document.getElementById("number").innerHTML = "1";
    console.log("FIRST LEVEL")
    level = 1;
    clickedSquares = [];
    seconds = 21;
}


/** function to removes each square when clicked**/
let timerSeconds;

function timer() {
    if (seconds == 21 && clickedSquares.length == 0) {
        console.log("TIMER")
        let countDown = setInterval(function() {
            seconds = seconds - 1;
            document.getElementById("seconds").innerHTML = seconds;
            if (seconds == 0) {
                clearInterval(countDown);
            }
            playingGame();
        }, 500);
    }
}

/** playingGame function*/
function playingGame() {
    squareNumber = squaresPerLevel[level];
    if (seconds == 0 && clickedSquares.length < squareNumber) {
        endGame();
    } else if (seconds > 0 && clickedSquares.length == 9 && level == 1) {
        go_to_level(1, 2);
        seconds = 21;
        clickedSquares = [];
        level = 2;
        console.log("level 2")

    } else if (seconds > 0 && clickedSquares.length == 12 && level == 2) {
        go_to_level(2, 3);
        seconds = 21;
        clickedSquares.length = 0;
        level = 3;
        console.log("level 3")

    } else if (seconds > 0 && clickedSquares.length == 16 && level == 3) {
        $(".grid-column").css("margin", "10px");
        go_to_level(3, 4);
        seconds = 21;
        clickedSquares = [];
        level = 4;
        console.log("level 4")

    } else if (seconds > 0 && clickedSquares.length == 15 && level == 4) {
        // timer();
        $(".grid-column").css("margin", "40px");
        go_to_level(4, 5);
        seconds = 21;
        clickedSquares = [];
        level = 5;
        console.log("level 5")

    } else if (seconds > 0 && clickedSquares.length == 20 && level == 5) {
        // timer();
        $(".grid-column").css("margin", "25px");
        go_to_level(5, 6);
        seconds = 20;
        clickedSquares = [];
        level = 6;
        console.log("level 6")

    } else if (seconds > 0 && clickedSquares.length == 21 && level == 6) {
        $(".grid-column").css("margin", "25px");
        go_to_level(6, 7);
        seconds = 20;
        clickedSquares = [];
        level = 7;
        console.log("level 7")

    } else if (seconds > 0 && clickedSquares.length == 25 && level == 7) {
        $(".grid-column").css("margin", "25px");
        go_to_level(7, 8);
        seconds = 20;
        clickedSquares = [];
        level = 8;
        console.log("level 8")

    } else if (seconds > 0 && clickedSquares.length == 30 && level == 8) {
        $(".grid-column").css("margin", "25px");
        go_to_level(8, 9);
        seconds = 20;
        clickedSquares = [];
        level = 9;
        console.log("level 9")

    } else if (seconds > 0 && clickedSquares.length == 28 && level == 9) {
        $(".grid-column").css("margin", "25px");
        go_to_level(9, 10);
        seconds = 21;
        clickedSquares = [];
        level = 10;
        console.log("level 10")

    } else if (seconds > 0 && clickedSquares.length == 35 && level == 10) {
        $("#game-win").slideDown();
        console.log("game-win slides down")
    }
}

/** function to removes each square when clicked**/

    $(".grid-column").on("click", function() {
        console.log("clickedSquares from line 186 = " + clickedSquares)
        clickedSquares.push($(this));
        $(this).hide();
    });


/** get reset button */
function resetButton() {
    $(".reset-button").slideDown();

}

/**game start again function */
function startGame() {
    go_to_level(level, 1)
    $(".grid-column").css("margin","0")
    console.log("STARTING GAME AGAIN")
    clickedSquares = [];
    seconds = 21;
    level = 1;
}



/**resetGame function*/

$(".reset-button").on("click", function() {
    console.log("CLICKED RESET BUTTON")
    console.log("clickedSquares line 214 = " + clickedSquares)
    console.log("seconds line 215 = " + seconds)
    console.log("level line 216 = " + level)
    $(this).css("display", "none");
    $("#game-win").addClass("hide");
    $(".start-button").slideDown();
    $(".grid-column").on("click", function() {
        console.log("clickedSquares from line 186 = " + clickedSquares)
        clickedSquares.push($(this));
        $(this).hide();
    });
    console.log("WHAT HAPPENS TO START BUTTON - line 220")
    $("#game-over").slideUp();
});


/** gameOver function */

function endGame() {
    startGame();
    $("#game-over").slideDown();
    console.log("ENDGAME line 229")
    resetButton();
    $(".grid-column").show()
    $(".grid-column").off('click');

}
