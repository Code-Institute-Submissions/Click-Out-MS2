<div align="center">
<i id="logo" class="fas fa-th favicon"></i>
</div>
<div align="center">

# Click Out!     
</div>

## UX
### Project Goals
The goal is to create a fun and simple interactive game that can keep users of all aged entertained. The game will have different levels and increased difficulty per level. The design is very simple and clean with minimal colours.

### User stories

What requirement i want met as a user:

* clear instruction of the game before game starts
* clicking each square to remove them should be easy.
* A clear view of the timer, so i know how much time i have left.
* A clear view of the level  to track progress 
* A progession of game difficulty
* how to restart the if want to do so. 
* I want a clear layout of the game e.g, colours must be easy on the eye and cohesive.
 
## Wireframes


## Features 
 ### Existing Features

 1. Fade in Starting Page -  The start page begins with the gradual fade in of the game logo. This is followed by the game title, instruction message box stating how the game is played and finally as start button to being the game. 
 This allows the player to be able to take instruction and allow them to click play when they've fully understood the game. 
 
 2. The start button - The start button is the last to fade  In on the start page. When clicked, the start button is removed and the game the game begins.
 
 3. The grid - When the start button is pressed  the game begins and the game consists of a grid of squares and you have to click the all of the squares individually before the timer runs out to move on the the next level.
    The next level will the consists of a bigger grid of then before or squares with a different layout.

4. Timer - The game consists of a 20 seconds timer, you have to click all the squares before the timer runs out.

5. level - The level features allows the player to know what level they are own there are a total of 10 levels.

6. Message Box - There a three message boxes that are dsiplayed throughout the game. One at the beginnig that states the instructions of the game
   Another when you lose the Game, lastly one that tell you've won the game. 

7. Reset Button - There is a reset button that allows you to reset the game once you have lost, the game or won and would like to play the game again.

## Features Left to Implement 

* I would like to introduce more levels and increase difficulty. 
* With increased levels i also want increase the seconds on the timer, so it's not too difficult and there's a balance.
* change the layout of the grid for example created a pattern with the squares, so that the game remains interesting and remains stimulating.

## Design 

### 1. font 
Using google FontAwosome i used the Roboto, just keeping it simple as the gameis not really focused on writing i kept the choice simple. 
 
### 2. Colours
   Game colours - As it's a simple game, i chose to keep the colour scheme very simple, by only using 3 colours max. 
   When i was doing some research on the game i wanted to create, i kept seeing a theme of a very dark background, i also read somewhere that it's easier on the eye. 
   So i decided to take that route. I got the idea of a white grid from the game logo which is actually a favicon, i liked how it looked a decided i wanted to match it.
   intially the background was dark purple but i went a bit darker as i went to ont create the game as it was a better fit and the white from the grid popped put more. The colour of the font was black until i changed the background,
   the background colour was the most important to be because it acted as a base for my colour scheme. 

### 3. logo 
The logo is a square grid, matching the sentiments on the game. As it's basically a grid game, i wanted to that to resonate in the logo,
and keep it simply by making them the same colour, i wanted everything to link together, and makig th whole game cohesive.

### 4 Game grid
Similar to the logo grid, same the colour, just to make the game design come together. Although the grid changes in size as the continue to up a level, the theme remains. 

## Final and official testing
  * [W3 MarkUp validation](https://validator.w3.org)
  * [W3 CSS validation](https://jigsaw.w3.org/css-validator/)

## Testing 

I  had trouble understanding javascript, at the beginnig, so i could't really understand the jasmine testing framework. instead I decided to do all the testing via browser  Google chrome Dev tools  and javascript debugger.
In future when i have a better understanding of javascript i plan to use jasmine testing Frameworks.

### General Testing
 I relied mostly on previewing my code via browser and chrome Dev tools. Everytime i would write a code, css, html or javascripts i would preview it in chrome Dev tools to see it's working 
 and try to fix it if it wasn't.
 Sometimes i'd also type my code into chrome dev tools first then copy it into my gitpod, i did this mostly for my HTML and CSS. This allowed me to make my game layout repsonsive on most devices and made sure that it looked the same or simialr on all devices.
 I then pushed this to my github is i was happy with the changes.
 i'd also sent the deployed website to myself and a few friends to check the repsonsiveness and the functionality of the game.

### Testing javascripts
  when testing my javascript codes i also used chrome dev tools. I also used Jshint, to help me detect some erros and potential problems on my code.
  I also used javascript debugger linked to Chrome Dev Tools, which also allowed me to pin point a specific issues, whilst using chrome tools to watch certan functions that i thought had issues.
  Also used console.log () to see if certain functions were being called and where they were being called, when issues with my javascript codes occured.

##  Issues and Resolutions

* I really struggled at begnning tp understand javascrits, this lead me to change the intially game i wanted to create because i did not thing i had the knowledge i need to create such and game. 
  The game was still a grid based game but intially, a grid would pop with a pattern and you'd have to copy the pattern. I really struggled with how i was going to create the different patters and to randomise the pattern to appear each time.
   So i opted out of this idea and adapted it into a my current game. 

* The first issue i had was creating my timer for the game. I created a timer after watching several youtube tutorials, However my timer kept was looping  after counting down to 20 seconds.  
 I solved this issue after researching, by creating an if statement that sets clear intervals to stop the timer when it had reaches zero.

* I had an issue with with my playingGame function first if statment, the clickeSquares.length was not working. This was because when i pushed the empty array to store the clicked grid-columns 
  i had already removed the grid columns before pushing so nothing was being pushed. This was resolved by changing the order of the jquery. The clicked grid-columns were push into the empty array before 
  they were removed.

* Moving to the next level after level 2  when the all the squares were clicked as set by the condition statments.  However i could not make them appear next levels appear after all the squares had been clcked in time . This was becase although the clicked 
 grid-columns were being pushed to an empty array, they were not being emptied, so they were jjust adding up For example if you needed to click 12 squares to move on to level 3 and you couldn't because all the squares for the previous level were still stored in the array 
 so the condition could not be met. This was resolved by emptying the array on every level.

 * The game over message would not appear after level 2. if you a level the game over message was suppose to appear on every level.  This did not happen, because the first if statement had only to the first level e.g. if clickeSquares.length < 9. 
   to fix this i created an array with all the squares from each level and place the level variable inside the array, this allowed the game over message to show on all levels when you failed.

* When the game restarted the grid would not show, this was an ongoing issue. This main issue was because i used jquery remove instead of hide this removed the element from the DOM list.
  This was resolved by using hide instead of remove, which mean that the grid could reappear.

* start button when game is reset did not show also due to using the remove jquery, resolved by using hide instead.

* When tryning to restart the timer would not restart. This was because the if statment stated the when the clickedSquares length was 0 the timer should start
 and to restart the game if you failed or won would mean that some of the squares had been clicked, so the timer would not restart. This was resolved by clearing the array and also setting the seconds to 21 
 in the start game function.

* when the game restarted the  amount of squares pushed into the empty array were being timed by 3 for some reason. This meant that you could not move on the next level once you had restarted the game. 
This was solved by removing the click function that the on click  grid column function was wrapped in. 

* When the game restarted after removing the clcik function, when you moved on the next level the grid from the previous level was not hidden.
 This was solved by calling the go-to-level function in the start game function instead of the on click reset button function.

* When the game restarted, if you failed a level with a bigger grid-columns margins, when the game restarted again the, the margin would not reset
  it would be applied to all the other levels. This was solved by using jquery and restting the margin to 0 in the start game function.
