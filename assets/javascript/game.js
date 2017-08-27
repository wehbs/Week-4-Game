$( document ).ready(function() {


// GLOBAL VARIABLES
var randomNumber = 0;
var totalScore = 0;

// Crystal values
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var crystalTotal = 0;

// Counters
var wins = 0;
var losses = 0;







// Create random number at the start of the game
function startGame() {
    randomNumber = Math.floor((Math.random() * 120) + 19);
    $("#randonum").html(randomNumber);
}
startGame();
// Each crystal creates a random number when clicked on which is added on to the total score

$("#buttone").on("click", function() {
        crystalOne = (Math.floor((Math.random() * 12) + 1));

        // console.log(crystalOne);
      });
$("#butttwo").on("click", function() {
        crystalTwo = Math.floor((Math.random() * 12) + 1);
        // console.log(crystalTwo);
      });
$("#buttthree").on("click", function() {
        crystalThree = Math.floor((Math.random() * 12) + 1);
        // console.log(crystalThree);
      });
$("#buttfour").on("click", function() {
        crystalFour = Math.floor((Math.random() * 12) + 1);
        // console.log(crystalFour);
      });
// Crysals added up


$("#score").html(crystalTotal);
console.log(randomNumber);



// The player wins if their total score matches the random number from the beginning of the game.

if (crystalTotal === randomNumber) {
      alert("You Win!");
      wins++
      // The game restarts whenever the player wins or loses.
      startGame();
}
// The player loses if their score goes above the random number.
if (crystalTotal > randomNumber) {
    alert("You Lose!")
    losses++
    // The game restarts whenever the player wins or loses.
    startGame();
}







// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


// Each crystal should have a random hidden value between 1 - 12.

// The random number shown at the start of the game should be between 19 - 120.







});
