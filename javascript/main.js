//---------Object Selectors---------
var startScreen = $('#startScreen')
var startButton = $('#startButton');
var gameScreen = $('#gameScreen')



startButton.on('click', function () {
 console.log('test')
 navigate(currentPage, gameScreen)
});


startScreen.css('display', 'block')
var currentPage = startScreen;


var navigate = function(pageFrom, pageTo) {
 pageFrom.css('display', 'none')
 currentPage = pageTo;
 currentPage.css('display', 'block')
}
