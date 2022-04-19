// inspired by Andy Ngom https://jsfiddle.net/adyngom/8ym43f25/
(function(document) {
    var _bars = [].slice.call(document.querySelectorAll('.bar-inner'));
    _bars.map(function(bar, index) {
      setTimeout(function() {
          bar.style.width = bar.dataset.percent;
      }, index * 1000);
      
    });
  })(document)