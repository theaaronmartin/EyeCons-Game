$('#myModal').modal({backdrop: 'static', keyboard: false});

var loginButton = $('#loginButton')

loginButton.on('click', function() {
   // wallpaper.removeClass('loginWallpaper');
 var noInput = document.forms['userName']['userName'].value;
 if (noInput === null || noInput === '') {
  //  alert('Please pick a username');
   navigate(currentPage, loginScreen)
 } else {
   $('#myModal').modal('hide');
   navigate(currentPage, gameScreen)
 }
});
