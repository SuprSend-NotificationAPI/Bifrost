'use client';

import React, { useEffect } from 'react';

export default function TestWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/widget.js';
    script.async = true; // This should not be used if you are managing script loading inside widget.js
    script.onload = () => console.log('Widget script loaded');
    script.onerror = () => console.error('Failed to load widget script');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Widget Test Page</h1>
      <p>The chat widget should appear in the bottom right corner.</p>
    </div>
  );
}
