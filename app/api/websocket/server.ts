import { WebSocketServer } from 'ws';
import WebSocket from 'ws';

// Create a WebSocket server instance
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws: WebSocket) => {
  console.log('Client connected');
  logConnectedClients();

  ws.on('message', (message: WebSocket.RawData) => {
    console.log('Received:', message);

    try {
      let messageObject;

      if (typeof message === 'string') {
        // Assume the message is already a JSON string
        messageObject = JSON.parse(message);
      } else if (Buffer.isBuffer(message)) {
        // Convert buffer to string and parse
        messageObject = JSON.parse(message.toString());
      } else if (message instanceof ArrayBuffer) {
        // Convert ArrayBuffer to string and parse
        messageObject = JSON.parse(Buffer.from(message).toString());
      } else {
        throw new Error('Unsupported message type');
      }

      // Broadcast the message to all connected clients
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          try {
            client.send(JSON.stringify(messageObject));
          } catch (error) {
            console.error('Error sending message:', error);
          }
        }
      });
    } catch (error) {
      console.error('Error processing message:', error);
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ error: 'Invalid JSON format' }));
      }
    }
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
    logConnectedClients();
  });
});

function logConnectedClients() {
  console.log('Connected clients:');
  Array.from(wss.clients).forEach((client, index) => {
    console.log(`Client ${index + 1}:`, client);
    console.log(`  Ready state: ${client.readyState}`);
  });
}

process.on('SIGINT', () => {
  console.log('Shutting down WebSocket server...');
  wss.clients.forEach((client) => {
    client.close();
  });
  wss.close(() => {
    console.log('WebSocket server closed.');
    process.exit(0);
  });
});

export { wss };
