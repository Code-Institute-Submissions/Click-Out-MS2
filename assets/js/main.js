    //landing page

$ (document).ready(function () {
    $("#logo").slideDown(2000);
    $("#game-title").delay(1500).slideDown();
    $(".instruction-container").delay(2000).slideDown()
    $(".start-button").delay(2600).fadeIn();
    $(".grid-column").show();

});

     // DOM Variables 

const startButton = document.getElementsByClassName("start-button");
const restButton  = document.getElementsByClassName("reset-button");
const showLevelDiv = document.getElementsByClassName("level-div");



//variables 
let gameGrid = document.getElementsByClassName("grid-column");
let getLevels = ""
let gridColour =



 
 
// click function when the the start button is pressed. Removes button/instruction and shows grid to start game.

$(".start-button").click(function() {
    $(".start-button").hide();
    $(".instruction-container").delay(700).slideUp();
    $(".level-div").delay(900).slideDown();
    $(".grid-column").delay(1500).css("visibility","visible").slideDown();

});

// click function when you click on a grid it reveal a colour

$(".grid-column").click(function(){
    gameGrid.addList.add("grid-column" )
   
    if (this.class ==="grid-column"){
    gameGrid.addList.add("background-color","grid-column" );
   };

});

    

    
