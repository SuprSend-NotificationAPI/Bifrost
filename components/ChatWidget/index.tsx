import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import { Message } from '../../lib/types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newMessage }),
      });
      if (!response.ok) throw new Error('Failed to send message');
      // Handle response from server if needed
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen ? (
        <ChatWindow messages={messages} onSendMessage={sendMessage} onClose={toggleChat} />
      ) : (
        <button 
          onClick={toggleChat}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        >
          Chat with us
        </button>
      )}
    </div>
  );
};

export default ChatWidget;