'use client';

import React, { useEffect } from 'react';

export default function TestWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/_next/static/chunks/widget-bundle.js';
    script.async = true;
    script.onload = () => {
      console.log('Widget script loaded');
      if (typeof (window as any).initializeBifrostChatWidget === 'function') {
        (window as any).initializeBifrostChatWidget();
      } else {
        console.error('initializeBifrostChatWidget function not found on window object');
      }
    };
    script.onerror = () => console.error('Failed to load widget script');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Widget Test Page</h1>
      <p>The chat widget should appear in the bottom right corner.</p>
    </div>
  );
}