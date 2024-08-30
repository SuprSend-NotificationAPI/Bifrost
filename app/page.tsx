import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bifrost</h1>
      <p className="text-xl text-gray-700 mb-8 text-center max-w-2xl">
        Embed our chat widget in your website to connect with your customers in real-time.
      </p>
      <Link href="/dashboard" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
        Go to Dashboard
      </Link>
    </main>
  );
}