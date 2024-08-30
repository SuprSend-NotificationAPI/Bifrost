import fetch from 'node-fetch';
import { Message } from './types';

const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
const CHANNEL_ID = 'C050P1PHVUG';

interface SlackPayload {
  channel: string;
  text: string;
  blocks: Array<{
    type: string;
    text?: {
      type: string;
      text: string;
    };
    elements?: Array<{
      type: string;
      text: string;
    }>;
  }>;
  thread_ts?: string;
}

interface SlackResponse {
  ok: boolean;
  error?: string;
  message?: {
    text: string;
  };
}

interface UserInfo {
  name: string;
  email: string;
}

export const sendToSlack = async (
  message: Message,
  userInfo: UserInfo
): Promise<string> => {
  if (!SLACK_BOT_TOKEN) {
    throw new Error('SLACK_BOT_TOKEN is not defined');
  }

  console.log('Received in sendToSlack:', { message, userInfo }); // Add this line


  const payload: SlackPayload = {
    channel: CHANNEL_ID,
    text: `New message from ${userInfo.name} (${userInfo.email}): ${message.text}`, // Fallback text
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '📬 New Customer Message',
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*From:* ${userInfo.name}\n*Email:* ${userInfo.email}\n*Message:* ${message.text}`,
        },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `*User ID:* ${message.id} | *Timestamp:* ${message.timestamp}`,
          },
        ],
      },
    ],
  };
  
  


  try {
    const response = await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SLACK_BOT_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json() as SlackResponse;

    if (!response.ok || !data.ok) {
      throw new Error(`Slack API error: ${data.error || 'Unknown error'}`);
    }

    const botMessage = data.message?.text || 'Message sent successfully to Slack';
    return botMessage;
  } catch (error) {
    console.error('Error sending message to Slack:', error);
    return 'Error in sending message';
  }
};
