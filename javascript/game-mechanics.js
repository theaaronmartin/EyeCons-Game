//56 spaces for the game board
//-11 each layer
//faze 1: tiles-45;faze 2: tiles-34;faze 3: tiles-23;
//each tile picks a random place on the board in sequence
//area must be populated to place a tile unless its the bottom layer

//-----Global Variables-----//
var startButton = document.getElementById('startButton');
var resetButton = document.getElementById('resetButton');
var pauseButton = document.getElementById('pauseButton');
var timerOutput = document.getElementById('timerOutput');
var scoreNode = document.getElementById('score');
var highScoreNode = document.getElementById('highScore');
var displayNode = document.getElementById('gameText');
var gameBoard = document.querySelector('.game-board');
var ourTiles = document.querySelectorAll('.tile-spot');
var time = 0;
var running = 0;
var score = 0;
var highScore = localStorage.getItem("highscore");
var pictureId = 0;
var pictureArray = [];
var totalMatches = [];
var isUserTurn = false;

//-------populate the game board-----------//
var populateGameBoard = function () {
  //gameboard arrays
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
        zeroCount.push(ourTiles[i]);
      } else {
        ourTiles[i].dataset.layer = 1;
        oneCount.push(ourTiles[i]);
        totalCount.push(ourTiles[i]);
        var picture = createPictureSpot()
        picture.style.zIndex = '1';
        ourTiles[i].appendChild(picture);
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
        if(randomNum <= 0.20) {
          ourTiles[i].dataset.layer = 1;
          oneCount.push(ourTiles[i]);
        } else {
          ourTiles[i].dataset.layer = 2;
          twoCount.push(ourTiles[i]);
          totalCount.push(ourTiles[i]);
          var picture = createPictureSpot()
          picture.style.zIndex = '2';
          picture.classList.add('second-layer');
          ourTiles[i].appendChild(picture);
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
          twoCount.push(ourTiles[i]);
        } else {
          if (totalCount.length < 100) {
            ourTiles[i].dataset.layer = 3;
            threeCount.push(ourTiles[i]);
            totalCount.push(ourTiles[i]);
            var picture = createPictureSpot()
            picture.style.zIndex = '3';
            picture.classList.add('third-layer');
            ourTiles[i].appendChild(picture);
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
    for (i = 0; i < ourTiles.length; i++) {
      ourTiles[i].innerHTML = '';
    }
    populateLayer1();
  }

  startTimer();
  userInteraction();
};
//------End of index generator-------//

//-----Picture Generator------//

var createPictureSpot = function () {
  var thePicture = pictureArray[pictureId++]
  var woodenBlock = document.createElement('DIV');
  var randomPicture = document.createElement('IMG');
  woodenBlock.classList.add('woodenTile');
  randomPicture.classList.add('tile-pic');
  randomPicture.setAttribute('src', thePicture);
  woodenBlock.appendChild(randomPicture);
  return woodenBlock;
}

function imageGenerator() {
  var url = "assets/images/eyecons/set1/";
  var imgArray = [url + "set1-tile-01.jpg",
  url + "set1-tile-02.jpg",
  url + "set1-tile-03.jpg",
  url + "set1-tile-04.jpg",
  url + "set1-tile-05.jpg",
  url + "set1-tile-06.jpg",
  url + "set1-tile-07.jpg",
  url + "set1-tile-08.jpg",
  url + "set1-tile-09.jpg",
  url + "set1-tile-10.jpg",
  url + "set1-tile-11.jpg",
  url + "set1-tile-12.jpg",
  url + "set1-tile-13.jpg",
  url + "set1-tile-14.jpg",
  url + "set1-tile-15.jpg",
  url + "set1-tile-16.jpg",
  url + "set1-tile-17.jpg",
  url + "set1-tile-18.jpg",
  url + "set1-tile-19.jpg",
  url + "set1-tile-20.jpg",
  url + "set1-tile-21.jpg",
  url + "set1-tile-22.jpg",
  url + "set1-tile-23.jpg",
  url + "set1-tile-24.jpg",
  url + "set1-tile-25.jpg" /*1-25*/
  ];
  var count = 0;
  var id = 0
  for (var i = 0; i < 25; i++) {
    while (count < 4) {
      var randomNumber = Math.floor((Math.random() * 100));
      console.log(randomNumber);
      if (pictureArray[randomNumber] == null) {
        pictureArray[randomNumber] = imgArray[i];
        count++;
        console.log("hit");
      }
    }
    count = 0;
  }
  console.log("done");
  console.log(pictureArray);
}


//link the timer to the game
/*------------------TIMER------------------*/
function startTimer () {
  pauseButton.disabled = false;
  pauseTimer();
}

function resetTimer () {
  console.log('Game has been reset')
  resetButton.style.display = 'none';
  pauseButton.style.display = 'none';
  startButton.style.display = 'inline';
  gameBoard.style.display = 'block';
  numberArray = [];
  pictureArray = [];
  totalMatches = [];
  running = 0;
  time = 0;
  timerOutput.innerHTML = "00:00:00";
  pauseButton.innerHTML = "Pause";
  displayNode.innerHTML = '';
  for (i = 0; i < ourTiles.length; i++) {
    ourTiles[i].innerHTML = '';
  }
  return;
}

function pauseTimer () {
  if(running === 0) {
    running = 1;
    incrementTimer();
    pauseButton.innerHTML = "Pause";
    resetButton.disabled = true;
    gameBoard.style.display = 'block';
    displayNode.innerHTML = '';
  } else {
    running = 0;
    pauseButton.innerHTML = "Resume";
    resetButton.disabled = false;
    gameBoard.style.display = 'none';
    displayNode.innerHTML = 'Resume to continue playing!';
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
        gameOver();
        console.log('Game is over');
        return;
      }
      timerOutput.innerHTML = mins + ":" + secs + ':' + tenths;
      incrementTimer();
    }, 100);
  }
}
/*------------------/TIMER------------------*/

//---------User Interaction-------//
var userInteraction = function (click) {
  var userClicks = [];
  var allTiles = document.querySelectorAll('.woodenTile');
  for (var i = 0; i < allTiles.length; i++) {
    allTiles[i].addEventListener('click', function () {
      if  (userClicks.length <= 1) {
        if (userClicks[0] === this){
          displayNode.innerHTML = 'You already choose that';
        } else {
          userClicks.push(this);
          checkInteraction(this);
        }
      } else {
        userClicks = [];
        userClicks.push(this);
      }
      console.log(userClicks);
    });
  }

  var checkInteraction = function (clicked) {
    if (userClicks.length === 2){
      var click1 = userClicks[0].firstChild.getAttribute('src')
      var click2 = userClicks[1].firstChild.getAttribute('src')
      if (click1 === click2) {
        score++;
        scoreNode.innerHTML = score;
        totalMatches.push(userClicks);
        for (var i = 0; i < userClicks.length; i++) {
          userClicks[i].style.display = 'none';
        }
        if (totalMatches.length === 50) {
          winGame();
        }
      } else {
        score--;
        scoreNode.innerHTML = score;
      }
    }
  }
}

//have a score function
var getHighScore = function () {
  if (score > localStorage.getItem("highscore")) {
    highScore = localStorage.setItem("highscore", score);
    highScoreNode.innerHTML = localStorage.getItem("highscore")
  }
}

//gameover function
var gameOver = function () {
  numberArray = [];
  pictureArray = [];
  totalMatches = [];
  resetButton.style.display = 'none';
  pauseButton.style.display = 'none';
  startButton.style.display = 'inline';
  displayNode.innerHTML = 'Game over! Try again.';
  running = 0;
  time = 0;
  for (i = 0; i < ourTiles.length; i++) {
    ourTiles[i].innerHTML = '';
  }
}

//win game function
var winGame = function () {
  numberArray = [];
  pictureArray = [];
  totalMatches = [];
  resetButton.style.display = 'none';
  pauseButton.style.display = 'none';
  startButton.style.display = 'inline';
  displayNode.innerHTML = 'Congratulations you won with a score of: ' + score + '!';
  running = 0;
  time = 0;
  getHighScore();
}

//-----A start function------//
var startGame = function () {
  //needs to reset score timer and everything
  startButton.style.display = 'none';
  resetButton.style.display = 'inline';
  pauseButton.style.display = 'inline';
  resetButton.disabled = true;
  pauseButton.disabled = true;
  displayNode.innerHTML = '';
  highScoreNode.innerHTML = highScore;
  pictureId = 0
  score = 0;
  scoreNode.innerHTML = 0;
  numberArray = [];
  pictureArray = [];
  totalMatches = [];
  for (i = 0; i < ourTiles.length; i++) {
    ourTiles[i].innerHTML = '';
  }
  imageGenerator();
  setTimeout(populateGameBoard, 3000);
}

//-------Event Listeners------//
resetButton.addEventListener('click', resetTimer);
pauseButton.addEventListener('click', pauseTimer);
startButton.addEventListener('click', startGame);
resetButton.style.display = 'none';
pauseButton.style.display = 'none';
