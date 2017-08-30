$(document).ready(function() {


  // GLOBAL VARIABLES
  // ==============================================================================
  var randomNumber = 0;
  var totalScore = 0;

  // Crystal values
  var crystalOne = 0;
  var crystalTwo = 0;
  var crystalThree = 0;
  var crystalFour = 0;

  var crystalArr = [];
  var crystalSum = 0;

  // Counters
  var wins = 0;
  var losses = 0;

  // Create random number at the start of the game
  function startGame() {
    // The random number shown at the start of the game should be between 19 - 120.
    randomNumber = Math.floor((Math.random() * 120) + 19);
    $("#randonum").html(randomNumber);

    // Reset
    crystalArr = [];
    crystalSum = 0;
    $("#score").html(crystalSum);

    crystalOne = (Math.floor((Math.random() * 12) + 1));
    crystalTwo = (Math.floor((Math.random() * 12) + 1));
    crystalThree = (Math.floor((Math.random() * 12) + 1));
    crystalFour = (Math.floor((Math.random() * 12) + 1));

    crystalArr.push(crystalOne);
    crystalArr.push(crystalTwo);
    crystalArr.push(crystalThree);
    crystalArr.push(crystalFour);
  }


  startGame();


  $("#buttone").on("click", function() {
    crystalSum += crystalArr[0];
    $("#score").html(crystalSum);
    checkWl();
  })

  $("#butttwo").on("click", function() {
    crystalSum += crystalArr[1];
    $("#score").html(crystalSum);
    checkWl();
  })

  $("#buttthree").on("click", function() {
    crystalSum += crystalArr[2];
    $("#score").html(crystalSum);
    checkWl();
  })

  $("#buttfour").on("click", function() {
    crystalSum += crystalArr[3];
    $("#score").html(crystalSum);
    checkWl();
  })

  // The player wins if their total score matches the random number from the beginning of the game.
  function checkWl() {
    if (crystalSum === randomNumber) {
      alert("You Win!");
      wins++
      $("#wins").html(wins);
      // The game restarts whenever the player wins.
      startGame();
    }
    // The player loses if their score goes above the random number.
    if (crystalSum > randomNumber) {
      alert("You Lose!")
      losses++
      $("#losses").html(losses);
      // The game restarts whenever the player loses.
      startGame();
    }
  }


});
