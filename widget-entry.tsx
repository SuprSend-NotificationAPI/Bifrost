import React from 'react';
import { createRoot } from 'react-dom/client';
import ChatWidget from './components/ChatWidget';

console.log('Widget entry file loaded');

function initializeBifrostChatWidget() {
  console.log('Initializing Bifrost Chat Widget');
  const container = document.createElement('div');
  container.id = 'bifrost-chat-widget';
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(React.createElement(ChatWidget));
  console.log('Bifrost Chat Widget initialized');
}

if (typeof window !== 'undefined') {
  (window as any).initializeBifrostChatWidget = initializeBifrostChatWidget;
  console.log('initializeBifrostChatWidget function attached to window:', (window as any).initializeBifrostChatWidget);
}

// For tree-shaking prevention, export the function
export { initializeBifrostChatWidget };

console.log('Widget entry file execution completed');