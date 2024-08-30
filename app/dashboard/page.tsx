"use client"
import React from 'react';
import AnalyticsChart from '../../components/Dashboard/AnalyticsChart';
import ConversationList from '../../components/Dashboard/ConversationList';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Analytics</h2>
          <AnalyticsChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Conversations</h2>
          <ConversationList />
        </div>
      </div>
    </div>
  );
}