//---------Object Selectors---------
var loginScreen = $('#loginScreen');
var loginButton = $('#loginButton');
var gameScreen = $('#gameScreen');
var wallpaper = $('.loginWallpaper');


loginButton.on('click', function() {
    // wallpaper.removeClass('loginWallpaper');
  // var noInput = document.forms['userName']['userName'].value;
  // if (noInput === null || noInput === '') {
  //   alert('Please pick a User Name');
  //   $('#myModal').modal({backdrop: 'static', keyboard: false});
  // } else {
    navigate(currentPage, gameScreen)
});


loginScreen.css('display', 'block')


var currentPage = loginScreen;


var navigate = function(pageFrom, pageTo) {
    pageFrom.css('display', 'none')
    currentPage = pageTo;
    currentPage.css('display', 'block')
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
        randomImageIndex = Math.floor((Math.random() * imgArray.length));
        baseUrl = "url('" + imgArray[randomImageIndex] + "')";
        var pictureArray = [];
        var count = 0;
        for (var i = 0; i < 25; i++) {
          while (count < 4) {
          var randomNumber = Math.floor((Math.random() * 100));;
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

var renderBoard = function() {
  var phase1 = true;
    if (phase1 === true) {
        var tileSpots = $('.tile-spot')
        var firstPhaseTiles = $('<div class="woodenTile"><div>')
        var firstPhasePics = $('<img class="tile-pic">')
        firstPhasePics.attr('src', imageGenerator)
        firstLayerPics.appendTo(firstLayerTiles)
        firstLayerTiles.appendTo(tileSpots)
    }
}
