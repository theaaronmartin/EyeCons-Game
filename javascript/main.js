//---------Starting Screen---------
var startButton = $('#startButton');
startButton.on('click', function () {
  alert('test')
  navigate(, )
});
startScreen.css('display', 'block')
var currentPage = pageAddCustomer;


var navigate = function(pageFrom, pageTo) {
  pageFrom.css('display', 'none')
  currentPage = pageTo;
  currentPage.css('display', 'block')
}
