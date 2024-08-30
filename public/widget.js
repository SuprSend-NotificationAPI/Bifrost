(function() {
  console.log('Widget script started');

  function loadCSS(href) {
    console.log('Loading CSS from:', href);
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  async function initializeWidget() {
    console.log('Initializing widget');
    
    // Load our widget bundle
    await loadScript('/_next/static/chunks/widget-bundle.js');

    // Call the initialization function
    if (typeof window.initializeBifrostChatWidget === 'function') {
      window.initializeBifrostChatWidget();
      console.log('Widget initialized');
    } else {
      console.error('Widget initialization function not found');
    }
  }

  loadCSS('http://localhost:3000/widget-styles.css');
  initializeWidget();

  console.log('Widget script completed');
})();