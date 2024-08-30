import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { initSocketIO, getIO } from './app/api/socketio';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  });

  // Initialize Socket.IO with the server
  const io = initSocketIO(server);

  if (io) {
    console.log('Socket.IO server initialized successfully');
  } else {
    console.error('Failed to initialize Socket.IO server');
  }

  server.listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
    console.log('Socket.IO server status:', getIO() ? 'Initialized' : 'Not initialized');
  });
});
