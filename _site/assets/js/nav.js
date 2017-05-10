(function() {

  var Scroller = {

    smooth: function(start, end, point) {
      if (point <= start) { return 0; }
      if (point >= end) { return 1; } 
      var x = (point - start) / (end - start); // interpolation
      return x*x*(3 - 2*x);
    },

    scroll: function(element, target, duration) {
      target = Math.round(target);
      duration = Math.round(duration);

      var 
        startTime = Date.now(),
        endTime = startTime + duration,
        startTop = element.scrollTop,
        distance = target - startTop,
        previousTop = element.scrollTop;

      function scroll_frame() {
        if (element.scrollTop != previousTop) {
          return;
        }

        // set the scrollTop for this frame
        var now = Date.now();
        var point = Scroller.smooth(startTime, endTime, now);
        var frameTop = Math.round(startTop + (distance * point));
        element.scrollTop = frameTop;

        if (now >= endTime) {
          return;
        }

        // If we were supposed to scroll but didn't, then we
        // probably hit the limit, so consider it done; not
        // interrupted.
        if (element.scrollTop === previousTop && element.scrollTop !== frameTop) {
          return;
        }
        previousTop = element.scrollTop;

        // schedule next frame for execution
        setTimeout(scroll_frame, 0);
      }

      // boostrap the animation process
      setTimeout(scroll_frame, 0);
    }
  };

  document.getElementById('arrriba').addEventListener('click', function() {
    Scroller.scroll(document.body, 0, 300);
  }, false);

})();