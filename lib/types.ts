export interface Message {
  id: string;
  sender: 'user' | 'agent' | 'bot' | 'slack';
  text: string;
  timestamp: Date;
  thread_ts?: string;
  userInfo?: {
    name: string;
    email: string;
  };
}

  
  export interface Conversation {
    id: string;
    messages: Message[];
    startTime: Date;
    endTime?: Date;
  }

  // Define and export the ChatWindowProps interface
  export interface ChatWindowProps {
    messages: Message[];
    onSendMessage: (text: string) => void;
    onClose: () => void;
  }