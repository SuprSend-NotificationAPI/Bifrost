import { NextRequest, NextResponse } from 'next/server';

let lastMessage: { text: string; timestamp: string } | null = null;
const processedMessageIds = new Set<string>();

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log('Received Slack event:', body);

  const { event } = body;

  if (event && event.type === 'message' && event.text && !event.bot_id) {
    const messageId = event.ts;

    if (processedMessageIds.has(messageId)) {
      console.log('Message already processed:', messageId);
      return NextResponse.json({ success: true });
    }

    processedMessageIds.add(messageId);

    const responseMessage = event.text;

    lastMessage = {
      text: responseMessage,
      timestamp: new Date().toISOString(),
    };

    await fetch('/api/chat-widget', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: responseMessage,
        timestamp: lastMessage.timestamp,
        sender: 'agent', // Assuming the incoming message is from the agent
      }),
    });

    console.log('Message sent to chat widget successfully.');

    return NextResponse.json({ success: true });
  }

  console.log('Event ignored:', event);
  return NextResponse.json({ success: true });
}
