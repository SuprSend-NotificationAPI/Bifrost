import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import { Message } from '../../lib/types';
import { ChatAlt2Icon, HomeIcon, ChatIcon, ChevronUpIcon } from '@heroicons/react/solid';
import Image from 'next/image';


export interface Props {
  messages: Message[];
  onSendMessage: (text: string) => void;
  onClose: () => void;
}

const ChatWindow: React.FC<Props> = ({ messages, onSendMessage, onClose }) => {
  const [showChat, setShowChat] = useState(false);

  const handleSendMessage = (text: string, userInfo: { name: string; email: string }) => {
    onSendMessage(text);
    // You can use the userInfo here if needed
    console.log('User info:', userInfo);
  };

  const handleExploreClick = () => {
    window.open('https://docs.suprsend.com/', '_blank');
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black text-gray-100 rounded-lg shadow-xl w-96 h-[650px] flex flex-col border border-gray-700">
      {showChat ? (
        <ChatMessage
          messages={messages}
          onSendMessage={onSendMessage}
          onClose={() => setShowChat(false)}
        />
      ) : (
        <>
          {/* Header */}
          <header className="bg-gradient-to-b from-purple-900 via-purple-780 to-transparent p-6 pb-10 flex flex-col items-start rounded-t-lg" style={{ height: '33%' }}>
            <h2 className="text-4xl font-bold text-white">Hi there 👋</h2>
            <p className="text-lg text-gray-300 mt-2">How can we help?</p>
          </header>
  
          {/* Single Action Button */}
          <div className="px-6 pt-4 space-y-4 mt-4">
            <button
              onClick={() => setShowChat(true)}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-4 px-4 rounded-lg flex justify-center items-center shadow-lg hover:shadow-lg transition-shadow duration-300"
            >
              <ChatAlt2Icon className="h-6 w-6 text-white mr-2" />
              Send a message!
            </button>
          </div>
  
          {/* Docs / SuprSend Section */}
          <div className="p-4 mx-6 bg-gray-800 rounded-md shadow-inner mt-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                <Image
                  src="https://cdn-b.saashub.com/images/app/service_logos/222/fik2qfh2md8t/large.png?1665648747"
                  alt="Docs / SuprSend Logo"
                  className="w-full h-full object-cover rounded-lg"
                  width={48}  // Adjust width and height as needed
                  height={48}
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Docs | SuprSend</h3>
                <p className="text-xs text-gray-400">Find detailed documentation and support.</p>
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={handleExploreClick}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300"
              >
                Explore
              </button>
            </div>
          </div>
  
          {/* Footer */}
<footer className="mt-auto border-t border-gray-800">
  <div className="flex justify-between">
    <a 
      href="https://docs.suprsend.com/docs/quick-start-guide"
      target="_blank"
      rel="noopener noreferrer"
      className="w-1/2 p-4 text-center text-gray-400 hover:bg-gray-800 flex flex-col items-center transition-colors duration-300"
    >
      <HomeIcon className="h-6 w-6 mb-1 text-purple-500 hover:text-white transition-colors duration-300" />
      <span className="text-sm">Home</span>
    </a>
    <a 
      href="https://join.slack.com/t/suprsendcommunity/shared_invite/zt-1bs6rbxr8-zI6SyJQd2b~XMpM9uaT1Bw"
      target="_blank"
      rel="noopener noreferrer"
      className="w-1/2 p-4 text-center text-gray-400 hover:bg-gray-800 border-l border-gray-800 flex flex-col items-center transition-colors duration-300"
    >
      <ChatIcon className="h-6 w-6 mb-1 text-purple-500 hover:text-white transition-colors duration-300" />
      <span className="text-sm">Ask on Slack</span>
    </a>
  </div>
  <div className="p-4 flex justify-center">
    <button
      onClick={onClose}
      className="text-gray-500 hover:text-gray-200 transition-opacity duration-300 ease-in-out"
      style={{ opacity: 1, transition: 'opacity 0.5s ease' }}
    >
      <ChevronUpIcon className="h-6 w-6" />
    </button>
  </div>
</footer>

        </>
      )}
    </div>
  );
  
};

export default ChatWindow;
