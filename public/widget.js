(function() {
  console.log('Widget script started');

  // Load CSS for the widget
  function loadCSS(href) {
      console.log('Loading CSS from:', href);
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
  }

  // Load a script dynamically
  function loadScript(src) {
      return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = src;
          script.onload = () => {
              console.log(`Script loaded from ${src}`);
              resolve();
          };
          script.onerror = () => {
              console.error(`Failed to load script from ${src}`);
              reject();
          };
          document.body.appendChild(script);
      });
  }

  // Load the widget-bundle.js from _next/static/chunks
  async function loadWidgetBundle() {
      const basePath = '/_next/static/chunks/';
      const widgetBundleName = 'widget-bundle';
      
      // Dynamically generate the path to the script
      const scriptPath = `${basePath}${widgetBundleName}.js`;
      console.log(`Attempting to load script from ${scriptPath}`);
      
      try {
          await loadScript(scriptPath);
      } catch (error) {
          console.error(`Failed to load widget-bundle from ${scriptPath}`, error);
      }
  }

  // Initialize the widget
  async function initializeWidget() {
      console.log('Initializing widget');
      
      try {
          // Load the widget-bundle.js script from _next/static/chunks
          await loadWidgetBundle();
          // Check if the initialization function is available and call it
          checkInitialization();
      } catch (error) {
          console.error('Error initializing widget:', error);
      }
  }

  // Check if the initialization function is available
  function checkInitialization(retries = 5) {
      if (typeof window.initializeBifrostChatWidget === 'function') {
          window.initializeBifrostChatWidget();
          console.log('Widget initialized');
      } else if (retries > 0) {
          console.warn('Widget initialization function not found, retrying...');
          setTimeout(() => checkInitialization(retries - 1), 200); // Retry after 200ms
      } else {
          console.error('Widget initialization function not found after retries');
      }
  }

  // Start the process
  loadCSS('/widget-styles.css');
  initializeWidget();

  console.log('Widget script completed');
})();
