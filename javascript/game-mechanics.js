//56 spaces for the game board
//-11 each layer
//faze 1: tiles-45;faze 2: tiles-34;faze 3: tiles-23;
//each tile picks a random place on the board in sequence
//area must be populated to place a tile unless its the bottom layer

//-----Global Variables-----//
var startButton = document.getElementById('startButton');
var resetButton = document.getElementById('resetButton');
var pauseButton = document.getElementById('pauseButton');

//-------populate the game board-----------//
var populateGameBoard = function () {
  //gameboard variables
  var ourTiles = document.querySelectorAll('.tile-spot');
  var totalCount = [];
  var zeroCount = [];
  var oneCount = [];
  var twoCount = [];
  var threeCount = [];

  var populateLayer1 = function () {
    for (var i = 0; i < ourTiles.length; i++) {
      var randomNum = Math.round(100 * Math.random())/100;
      if(randomNum <= 0.18) {
        ourTiles[i].dataset.layer = 0;
        zeroCount.push(ourTiles[i].dataset.layer);
      } else {
        ourTiles[i].dataset.layer = 1;
        oneCount.push(ourTiles[i].dataset.layer);
        totalCount.push(ourTiles[i].dataset.layer);
      }
    }
    console.log("this is 1's: " + oneCount.length);
    populateLayer2();
  }

  var populateLayer2 = function () {
    oneCount = [];
    for (var i = 0; i < ourTiles.length; i++) {
      if (ourTiles[i].dataset.layer === '1') {
        var randomNum = Math.round(100 * Math.random())/100;
        if(randomNum <= 0.22) {
          ourTiles[i].dataset.layer = 1;
          oneCount.push(ourTiles[i].dataset.layer);
        } else {
          ourTiles[i].dataset.layer = 2;
          twoCount.push(ourTiles[i].dataset.layer);
          totalCount.push(ourTiles[i].dataset.layer);
        }
      } else {
      }
    }
    console.log("this is 2's: " + twoCount.length);
    populateLayer3();
  }

  var populateLayer3 = function () {
    twoCount = [];

    for (var i = 0; i < ourTiles.length; i++) {
      if (ourTiles[i].dataset.layer === '2') {
        var randomNum = Math.round(100 * Math.random())/100;
        if(randomNum <= 0.22) {
          ourTiles[i].dataset.layer = 2;
          twoCount.push(ourTiles[i].dataset.layer);
        } else {
          if (totalCount.length < 100) {
            ourTiles[i].dataset.layer = 3;
            threeCount.push(ourTiles[i].dataset.layer);
            totalCount.push(ourTiles[i].dataset.layer);
          } else {
            break;
          }
        }
      } else {
      }
  }
    console.log("this is 3's: " + threeCount.length);
  }

  populateLayer1();

  if (totalCount.length < 100) {
    console.log('Error not enough tiles!');
    totalCount = [];
    zeroCount = [];
    oneCount = [];
    twoCount = [];
    threeCount = [];
    populateLayer1();
  }

  startTimer()
};
//------End of index generator-------//

//randomly generate a picture
var pictureGenerator = function () {
  //-- must always have pairs
}

//link the timer to the game
/*------------------TIMER------------------*/
resetButton.addEventListener('click', resetTimer);
pauseButton.addEventListener('click', pauseTimer);
var timerOutput = document.getElementById("timerOutput");
var time = 0;
var running = 0;

function startTimer () {
  pauseTimer();
}

function resetTimer () {
  // resetButton.style.display = 'none';
  // startButton.style.display = 'block';
  timerOutput.innerHTML = "00:00:00";
  pauseButton.innerHTML = "Pause";
  running = 0;
  time = 0;
  return;
}

function pauseTimer () {
  if(running === 0) {
    running = 1;
    incrementTimer();
    pauseButton.innerHTML = "Pause";
  } else {
    running = 0;
    pauseButton.innerHTML = "Resume";
  }
}

function incrementTimer () {
  if(running == 1) {
    setTimeout(function () {
      time++;
      var mins = Math.floor(time/10/60);
      var secs = Math.floor(time/10 % 60);
      var tenths = time % 10;
      if(mins < 10) {
        mins = "0" + mins;
      }
      if (secs < 10) {
        secs = "0" + secs;
      }
      if (secs >= 60) {
        secs = 0;
      }
      if (mins == 2 && secs == 30) {
        resetTimer();
        console.log('Game is over');
        return;
      }
      timerOutput.innerHTML = mins + ":" + secs + ':' + tenths;
      incrementTimer();
    }, 100);
  }
}
/*------------------/TIMER------------------*/

//have a score function
var getHighScore = function () {
  //-- score counts up the more you get right
  //-- highscore function
}

//gameover function
var gameOver = function () {
  //-- displays a game over sign
  //-- resets start button
}

//win game function
var winGame = function () {
  //-- display score
  //-- display time
  //-- check if it is greater than high score
  //-- check is time is better
}

//-----A start function------//
var startGame = function () {
  //needs to reset score timer and everything
  // startButton.style.display = 'none';
  // resetButton.style.display = 'block';
  populateGameBoard();
}

startButton.addEventListener('click', startGame)
// resetButton.style.display = 'none';
