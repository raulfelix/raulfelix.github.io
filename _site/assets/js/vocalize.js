(function() {
  var track = new Audio('./assets/audio/raul_es.mp3');
  track.playbackRate = .75;
  
  document.getElementById('pronounce').addEventListener('click', function() {
    track.play();
  }, false);

})();