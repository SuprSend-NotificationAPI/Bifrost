import { NextResponse } from 'next/server';

export function GET() {
  const script = `
    (function() {
      var script = document.createElement('script');
      script.src = 'https://your-domain.com/widget.js';
      document.body.appendChild(script);
    })();
  `;

  return new NextResponse(script, {
    headers: { 'Content-Type': 'application/javascript' },
  });
}