import React, { useState, useEffect, useCallback } from 'react';
import { Message } from '../../lib/types';
import { PaperAirplaneIcon, XIcon } from '@heroicons/react/outline';
import io, { Socket } from 'socket.io-client';
import { sendToSlack } from '../../lib/slackIntegration';
import Image from 'next/image';

interface Props {
  messages: Message[];
  onSendMessage: (text: string, userInfo: { name: string; email: string }) => void;
  onClose: () => void;
}

interface UserInfo {
  name: string;
  email: string;
}

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const ChatMessage: React.FC<Props> = ({ messages, onSendMessage, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [chatMessages, setChatMessages] = useState<Message[]>(messages);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [showUserInfoForm, setShowUserInfoForm] = useState(true);
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', email: '' });

  useEffect(() => {
    console.log('Initializing Socket.IO connection');
    const newSocket = io();
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Socket.IO connection established.');
    });

    newSocket.on('disconnect', () => {
      console.log('Socket.IO connection closed.');
    });

    newSocket.on('error', (error: Error) => {
      console.error('Socket.IO error:', error);
    });

    newSocket.on('slack_message', (data: { user: string; text: string; timestamp: string; thread_ts: string }) => {
      console.log('Received Socket.IO message:', data);

      const newMessage: Message = {
        id: Date.now().toString(),
        sender: data.user === 'agent' ? 'agent' : 'user',
        text: data.text,
        timestamp: new Date(data.timestamp),
        thread_ts: data.thread_ts,
      };

      console.log('Adding new message to chat:', newMessage);
      setChatMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      console.log('Closing Socket.IO connection...');
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log('Chat messages updated:', chatMessages);
  }, [chatMessages]);

  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.name && userInfo.email) {
      console.log('User info submitted:', userInfo);
      setShowUserInfoForm(false);
    }
  };

  const handleSend = () => {
    if (showUserInfoForm) {
      console.error('User info not submitted yet');
      return;
    }
    
    if (inputValue.trim()) {
      console.log('User Info before sending:', userInfo);

      const message: Message = {
        id: Date.now().toString(),
        sender: 'user',
        text: inputValue.trim(),
        timestamp: new Date(),
      };

      console.log('Sending message:', message);
      
      // Send both message and userInfo to the API
      fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          name: userInfo.name,
          email: userInfo.email,
        }),
      })
        .then(response => response.json())
        .then(data => console.log('API response:', data))
        .catch(error => console.error('Error sending message:', error));

      setChatMessages(prevMessages => [...prevMessages, message]);
      onSendMessage(inputValue.trim(), userInfo);
      setInputValue('');
    }
  };

  const groupMessagesByDate = useCallback(() => {
    const groups: { date: string; messages: Message[] }[] = [];
    let currentDate = '';

    chatMessages.forEach((msg) => {
      const messageDate = new Date(msg.timestamp).toDateString();

      if (messageDate !== currentDate) {
        groups.push({ date: messageDate, messages: [msg] });
        currentDate = messageDate;
      } else {
        groups[groups.length - 1].messages.push(msg);
      }
    });

    return groups;
  }, [chatMessages]);

  if (showUserInfoForm) {
    return (
      <div className="h-full flex flex-col bg-gray-800 text-gray-100 rounded-lg shadow-lg overflow-hidden relative">
        <header className="bg-gradient-to-b from-purple-700 via-purple-900 to-transparent text-white p-5 flex items-center justify-between min-h-20 rounded-t-lg">
          <div className="flex items-center">
            <Image
              src="https://cdn-b.saashub.com/images/app/service_logos/222/fik2qfh2md8t/large.png?1665648747"
              alt="Company Logo"
              width={48}  // Adjust width and height as needed
              height={48}
              className="rounded-full"
            />
            <h1 className="ml-3 text-2xl font-semibold">SuprSend Chat</h1>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Close chat"
          >
            <XIcon className="h-6 w-6 text-white" />
          </button>
        </header>

        <div className="flex-grow p-8 flex flex-col justify-center items-center bg-gray-900">
          <form onSubmit={handleUserInfoSubmit} className="w-full max-w-lg p-8 bg-gray-700 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-100 mb-6 text-center">Let's Get Started</h2>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={userInfo.name}
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                className="mt-2 block w-full rounded-md border-gray-600 bg-gray-800 text-gray-200 p-4 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={userInfo.email}
                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                className="mt-2 block w-full rounded-md border-gray-600 bg-gray-800 text-gray-200 p-4 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-4 rounded-md text-lg hover:bg-purple-800 transition-colors"
            >
              Start Chat
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-gray-800 text-gray-100 rounded-lg shadow-lg overflow-hidden relative">
      <header className="bg-gradient-to-b from-purple-700 via-purple-900 to-transparent text-white p-5 flex items-center justify-between min-h-20 rounded-t-lg">
        <div className="flex items-center">
          <Image
            src="https://cdn-b.saashub.com/images/app/service_logos/222/fik2qfh2md8t/large.png?1665648747"
            alt="Company Logo"
            width={48}  // Adjust width and height as needed
            height={48}
            className="rounded-full"
          />
          <h1 className="ml-3 text-2xl font-semibold">SuprSend Chat</h1>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors"
          aria-label="Close chat"
        >
          <XIcon className="h-6 w-6 text-white" />
        </button>
      </header>

      <div className="p-4 flex justify-center items-center relative">
        <div className="relative flex">
          <Image
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Agent 1"
            width={56}  // Adjust width and height as needed
            height={56}
            className="rounded-full border-4 border-green-500"
          />
          <Image
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="Agent 2"
            width={56}  // Adjust width and height as needed
            height={56}
            className="rounded-full border-4 border-green-500"
          />
        </div>
      </div>

      <div className="flex-grow p-4 overflow-y-auto space-y-6 bg-gray-800">
        {groupMessagesByDate().map((group) => (
          <div key={group.date}>
            <div className="text-gray-500 text-center text-sm my-4">{formatDate(new Date(group.date))}</div>
            {group.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-start space-x-3 mb-2`}
              >
                {msg.sender !== 'user' && (
                  <Image
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Sender Avatar"
                    width={48}  // Adjust width and height as needed
                    height={48}
                    className="rounded-full border-4 border-green-500"
                  />
                )}
                <div
                  className={`py-2 px-4 rounded-xl max-w-xs break-words ${
                    msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-100'
                  }`}
                >
                  <div className="text-base">{msg.text}</div>
                </div>
                {msg.sender === 'user' && (
                  <Image
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt="User Avatar"
                    width={48}  // Adjust width and height as needed
                    height={48}
                    className="rounded-full border-4 border-green-500"
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-600 flex items-center bg-gray-800">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="flex-grow p-3 rounded-full border border-gray-600 bg-gray-700 text-gray-200 placeholder-gray-400"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="ml-2 bg-purple-700 text-white p-3 rounded-full hover:bg-purple-800 transition-colors"
        >
          <PaperAirplaneIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ChatMessage;
