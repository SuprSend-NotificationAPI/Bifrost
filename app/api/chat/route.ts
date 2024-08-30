import { NextResponse } from 'next/server';
import { saveMessage } from '../../../lib/database';
import { sendToSlack } from '../../../lib/slackIntegration';

export async function POST(req: Request) {
  try {
    const { message, name, email } = await req.json();
    
    console.log('Received in API:', { message, name, email });

    if (!name || !email) {
      console.error('Name or email is missing');
      return NextResponse.json({ success: false, error: 'Name and email are required' }, { status: 400 });
    }

    const userInfo = { name, email };

    await saveMessage(message);

    await sendToSlack(message, userInfo);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing message:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}