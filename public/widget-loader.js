(function() {
    console.log('Widget loader script started');
    var script = document.createElement('script');
    script.src = 'http://localhost:3000/widget.js';
    script.async = true;
    script.onload = function() {
      console.log('Widget script loaded successfully');
    };
    script.onerror = function() {
      console.error('Failed to load widget script');
    };
    document.body.appendChild(script);
    console.log('Widget loader script completed');
  })();