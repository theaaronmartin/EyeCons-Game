//56 spaces for the game board
//-11 each layer
//faze 1: tiles-45;faze 2: tiles-34;faze 3: tiles-23;
//each tile picks a random place on the board in sequence
//area must be populated to place a tile unless its the bottom layer

//A start function
var startGame = function () {
  //-- start is linked to a button
  
  //-- user is playing function
}

//-------populate the game board-----------//
var populateGameBoard = function () {
  //global variables
  var ourTiles = document.querySelectorAll('.tile-spot');
  var totalCount = []
  var zeroCount = [];
  var oneCount = [];
  var twoCount = [];
  var threeCount = [];

  var populateLayer1 = function () {
    for (var i = 0; i < ourTiles.length; i++) {
      var randomNum = Math.round(100 * Math.random())/100;
      if(randomNum <= 0.18) {
        ourTiles[i].style.zIndex = 0;
        zeroCount.push(ourTiles[i].style.zIndex);
      } else {
        ourTiles[i].style.zIndex = 1;
        oneCount.push(ourTiles[i].style.zIndex);
        totalCount.push(ourTiles[i].style.zIndex);
      }
    }
    console.log("this is 1's: " + oneCount.length);
    populateLayer2();
  }

  var populateLayer2 = function () {
    oneCount = [];
    for (var i = 0; i < ourTiles.length; i++) {
      if (ourTiles[i].style.zIndex === '1') {
        var randomNum = Math.round(100 * Math.random())/100;
        if(randomNum <= 0.22) {
          ourTiles[i].style.zIndex = 1;
          oneCount.push(ourTiles[i].style.zIndex)
        } else {
          ourTiles[i].style.zIndex = 2;
          twoCount.push(ourTiles[i].style.zIndex);
          totalCount.push(ourTiles[i].style.zIndex);
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
      if (ourTiles[i].style.zIndex === '2') {
        var randomNum = Math.round(100 * Math.random())/100;
        if(randomNum <= 0.22) {
          ourTiles[i].style.zIndex = 2;
          twoCount.push(ourTiles[i].style.zIndex)
        } else {
          if (totalCount.length < 100) {
            ourTiles[i].style.zIndex = 3;
            threeCount.push(ourTiles[i].style.zIndex);
            totalCount.push(ourTiles[i].style.zIndex);
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
    console.log('Error not enough tiles!')
    totalCount = []
    zeroCount = [];
    oneCount = [];
    twoCount = [];
    threeCount = [];
    populateLayer1();
  }

};
//------End of index generator-------//

//randomly generate a picture
var pictureGenerator = function () {
  //-- must always have pairs
}

//link the timer to the game
/*------------------TIMER------------------*/
  startPauseButton = document.getElementById("startPause")
  startPauseButton.addEventListener('click', startPause)
  resetTimeButton = document.getElementById("resetButton")
  resetTimeButton.addEventListener('click', reset)
  timerOutput = document.getElementById("timerOutput")
  var time = 0;
  var running = 0;
  function startPause () {
    if(running == 0){
      running = 1;
      increment();
      startPauseButton.innerHTML = "Pause";
    }else{
      running = 0;
      startPauseButton.innerHTML = "Resume";
    }
  }
  function reset () {
    startPauseButton.innerHTML = "Start";
    timerOutput.innerHTML = "00:00:00";
    running = 0;
    time = 0;
    return;
  }
  function increment() {
    if(running == 1){
      setTimeout(function(){
        time++
        var mins = Math.floor(time/10/60);
        var secs = Math.floor(time/10 % 60);
        var tenths = time % 10;
        if(mins < 10){
          mins = "0" + mins;
        }
        if (secs < 10) {
          secs = "0" + secs;
        }
        if (secs >= 60){
          secs = 0;
        }
        if (mins == 2 && secs == 30) {
            reset()
            console.log('Game is over')
            return;
        }
        timerOutput.innerHTML = mins + ":" + secs + ':' + tenths;
        this.increment()
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
