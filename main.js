function smoothScroll() {
    var targetPosition = mainContainer.offsetTop - 100;
    console.log(targetPosition);
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 1000;
    var start = null;
    
    function animation(currentTime) {
      if (!start) start = currentTime;
      var progress = currentTime - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) requestAnimationFrame(animation);
    }
    
    function easeInOutCubic(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t*t + b;
      t -= 2;
      return c/2*(t*t*t + 2) + b;
    }
    
    requestAnimationFrame(animation);
  }

  var mainContainer = document.getElementById("mainContainer");