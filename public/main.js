$(function() {
  var $window = $(window);
  var $inputMessage = $('.inputMessage');
  var $portPerangkat = $('#port');

  var socket = io();

  function sendMessage () {
    var message = $inputMessage.val();
    var port = $portPerangkat.val();
    if (message) {
      socket.emit('kendaliPerangkat', [parseInt(port),parseInt(message)]);
    }
  }


  $window.keydown(function (event) {
    if (event.which === 13) {
        sendMessage();
    }
  });

});
