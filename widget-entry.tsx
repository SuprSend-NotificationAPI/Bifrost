import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatWidget from './components/ChatWidget';

// Function to initialize the widget
function initializeWidget() {
  const container = document.createElement('div');
  container.id = 'bifrost-chat-widget';
  document.body.appendChild(container);

  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(ChatWidget));
}

// Expose the initialization function to the global scope
(window as any).initializeBifrostChatWidget = initializeWidget;