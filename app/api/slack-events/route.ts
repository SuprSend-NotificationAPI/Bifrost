import { NextResponse } from 'next/server';
import { Server as SocketIOServer } from 'socket.io';
import { getIO } from '../socketio';
import { ensureSocketIOInitialized } from '../socketio';


const SLACK_BOT_TOKEN: string = process.env.SLACK_BOT_TOKEN || '';
const BOT_USER_ID: string = process.env.BOT_USER_ID || '';

if (!SLACK_BOT_TOKEN || !BOT_USER_ID) {
  throw new Error('SLACK_BOT_TOKEN or BOT_USER_ID is not defined in environment variables.');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Received Slack event:', body);

    if (body.type === 'url_verification') {
      console.log('Handling URL verification');
      return new Response(body.challenge, { status: 200 });
    }

    const { event } = body;

    if (event && event.type === 'message') {
      console.log('Processing message event:', event);

      let threadTs = event.thread_ts || event.ts;

      const messageData = {
        user: event.user === BOT_USER_ID ? 'agent' : 'user',
        text: event.text,
        timestamp: new Date().toISOString(),
        thread_ts: threadTs,
      };

      try {
        const io = await ensureSocketIOInitialized();
        console.log('Broadcasting message:', JSON.stringify(messageData, null, 2));
        io.emit('slack_message', messageData);
        console.log('Message broadcasted to Socket.IO clients.');
      } catch (error) {
        console.error('Error with Socket.IO:', error);
      }
    } else {
      console.log('Event is not a message type or missing:', JSON.stringify(event, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing Slack event:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: 'Slack Events API' });
}
