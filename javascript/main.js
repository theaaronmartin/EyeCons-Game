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
