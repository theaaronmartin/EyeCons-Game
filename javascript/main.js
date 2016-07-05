//---------Object Selectors---------
var loginScreen = $('#loginScreen');
var loginButton = $('#loginButton');
var gameScreen = $('#gameScreen');
var wallpaper = $('.loginWallpaper');


loginButton.on('click', function () {
  // wallpaper.removeClass('loginWallpaper');
  navigate(currentPage, gameScreen)
});


loginScreen.css('display', 'block')
var currentPage = loginScreen;


var navigate = function(pageFrom, pageTo) {
 pageFrom.css('display', 'none')
 currentPage = pageTo;
 currentPage.css('display', 'block')
}

var imageGenerator = function () {
  var url = "assets/images/eyecons/set1/";
    imgArray = [url+"set1-tile-01.jpg",
                url+"set1-tile-02.jpg",
                url+"set1-tile-03.jpg",
                url+"set1-tile-04.jpg",
                url+"set1-tile-05.jpg",
                url+"set1-tile-06.jpg",
                url+"set1-tile-07.jpg",
                url+"set1-tile-08.jpg",
                url+"set1-tile-09.jpg",
                url+"set1-tile-10.jpg",
                url+"set1-tile-11.jpg",
                url+"set1-tile-12.jpg",
                url+"set1-tile-13.jpg",
                url+"set1-tile-14.jpg",
                url+"set1-tile-15.jpg",
                url+"set1-tile-16.jpg",
                url+"set1-tile-17.jpg",
                url+"set1-tile-18.jpg",
                url+"set1-tile-19.jpg",
                url+"set1-tile-20.jpg",
                url+"set1-tile-21.jpg",
                url+"set1-tile-22.jpg",
                url+"set1-tile-23.jpg",
                url+"set1-tile-24.jpg",
                url+"set1-tile-25.jpg",
                url+"set1-tile-26.jpg",
              ],
          randomImageIndex = Math.floor((Math.random() * imgArray.length)),
          baseUrl = "url('" + imgArray[randomImageIndex] + "')";
          $('.tile-spot').css('background-image',baseUrl)
}
