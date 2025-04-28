var main = function() {
  var state;
  //The PLAY button
  $('#play').click(function() {
    $('#message').text("Playing track");
    $('#player').trigger("play");
  });
  //The PAUSE button
  $('#pause').click(function() {
    $('#message').text("Track paused");
    $('#player').trigger("pause");
  });
  //The MUTE button
  $('#mute').click(function() {
    $("#player").prop('muted', true);
  })
  //The UNMUTE button
  $('#unmute').click(function() {
    $("#player").prop('muted', false);
  })
  //The STOP button
  $('#stop').click(function() {
    $("#player").trigger("pause");
    $("#player").prop("currentTime", 0);
    $("#message").text("Track stopped");
  })
  let value = $('#player').prop('volume');
  //The VOLUME UP button
  if(value <= 1) {
    $("#volup").click(function() {
      $("#player").prop("volume", value += 0.1);
    })
  }
  //The VOLUME DOWN button
  if(value >= 0) {
    $("#voldown").click(function() {
      $("#player").prop("volume", value -= 0.1);
    })
  }
}
$(document).ready(main);