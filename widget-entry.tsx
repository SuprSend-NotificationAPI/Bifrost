import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatWidget from './components/ChatWidget';

// Function to initialize the widget
function initializeWidget() {
  console.log('Initializing Bifrost Chat Widget');
  const container = document.createElement('div');
  container.id = 'bifrost-chat-widget';
  document.body.appendChild(container);

  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(ChatWidget));
  console.log('Bifrost Chat Widget initialized');
}

if (typeof window !== 'undefined') {
  (window as any).initializeBifrostChatWidget = initializeWidget;
  console.log('initializeBifrostChatWidget function attached to window:', window.initializeBifrostChatWidget);
}



// For tree-shaking prevention, export the function
export { initializeWidget as initializeBifrostChatWidget };

console.log('initializeBifrostChatWidget:', (window as any).initializeBifrostChatWidget);
