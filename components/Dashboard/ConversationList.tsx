import React from 'react';

interface Conversation {
  id: string;
  customer: string;
  lastMessage: string;
  timestamp: string;
}

const conversations: Conversation[] = [
  { id: '1', customer: 'John Doe', lastMessage: 'Thanks for your help!', timestamp: '2023-05-20 14:30' },
  { id: '2', customer: 'Jane Smith', lastMessage: 'When will my order arrive?', timestamp: '2023-05-20 13:45' },
  { id: '3', customer: 'Bob Johnson', lastMessage: 'I have a question about pricing.', timestamp: '2023-05-20 11:20' },
];

const ConversationList: React.FC = () => {
  return (
    <div className="space-y-4">
      {conversations.map((conversation) => (
        <div key={conversation.id} className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800">{conversation.customer}</h3>
          <p className="text-gray-600">{conversation.lastMessage}</p>
          <p className="text-sm text-gray-400 mt-2">{conversation.timestamp}</p>
        </div>
      ))}
    </div>
  );
};

export default ConversationList;