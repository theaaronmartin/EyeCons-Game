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

//populate the game board
var populateGameBoard = function () {
  //-- randomly generate if there will be an empty area
  //-- only can populate over a poulated area if z-index is 1 or greater
  //-- must have three different layers
}

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
      startPauseButton.innerHTML = "pause";
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
        if (mins == 0 && secs == 5) {
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
  //-- link best timer

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



//
// startPauseButton = document.getElementById("startPause")
// timerOutput = document.getElementById("timerOutput")
// var time = 0;
// var running = 0;
// function startPause () {
//   if(running == 0){
//     running = 1;
//     increment();
//     startPauseButton.innerHTML = "pause";
//   }else{
//     running = 0;
//     startPauseButton.innerHTML = "Resume";
//   }
// }
// function reset() {
//   running = 0;
//   time = 0;
//   startPauseButton.innerHTML = "Start";
//   timerOutput.innerHTML = "00:00:00";
//   return;
// }
// var increment = function() {
//   if(running == 1){
//     setTimeout(function(){
//       time++
//       var mins = Math.floor(time/10/60);
//       var secs = Math.floor(time/10 % 60);
//       var tenths = time % 10;
//       if(mins < 10){
//         mins = "0" + mins;
//       }
//       if (secs < 10) {
//         secs = "0" + secs;
//       }
//       if (secs >= 60){
//         secs = 0;
//       }
//
//       if (mins == 2 && secs == 30) {
//           reset()
//           console.log('Game is over')
//           return;
//       }
//       timerOutput.innerHTML = mins + ":" + secs + ':' + tenths;
//       increment()
//     }, 100);
//   }
// }
