import { Server as SocketIOServer } from 'socket.io';
import { Server as HTTPServer } from 'http';

let io: SocketIOServer | null = null;

export function initSocketIO(httpServer: HTTPServer): SocketIOServer | null {
    console.log('initSocketIO called');
    if (!io) {
      console.log('Initializing Socket.IO server');
      try {
        io = new SocketIOServer(httpServer, {
          cors: {
            origin: '*',
            methods: ['GET', 'POST'],
          },
        });
  
        io.on('connection', (socket) => {
          console.log('New client connected', socket.id);
        });
  
        console.log('Socket.IO server initialized successfully');
      } catch (error) {
        console.error('Failed to initialize Socket.IO server:', error);
        io = null;
      }
    } else {
      console.log('Socket.IO server already initialized');
    }
    return io;
  }
  

export function getIO(): SocketIOServer | null {
  if (!io) {
    console.warn('getIO called before Socket.IO server was initialized');
  }
  return io;
}

// Ensure Socket.IO is initialized
export function ensureSocketIOInitialized(): Promise<SocketIOServer> {
  return new Promise((resolve, reject) => {
    if (io) {
      resolve(io);
    } else {
      const checkInterval = setInterval(() => {
        if (io) {
          clearInterval(checkInterval);
          resolve(io);
        }
      }, 100);

      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkInterval);
        reject(new Error('Socket.IO initialization timeout'));
      }, 60000);
    }
  });
}
