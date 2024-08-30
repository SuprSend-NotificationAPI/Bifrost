'use client'

import React, { useEffect } from 'react';

export default function TestWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Widget Test Page</h1>
      <p>The chat widget should appear in the bottom right corner.</p>
    </div>
  );
}