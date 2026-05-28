import logger from '../utils/logger.js';

export const setupSocketHandlers = (io) => {
  io.on('connection', (socket) => {
    logger.info(`New client connected: ${socket.id}`);

    // Event: Student entry/exit
    socket.on('access:registered', (data) => {
      logger.info(`Access registered: ${JSON.stringify(data)}`);
      io.emit('access:updated', data);
    });

    // Event: Real-time dashboard update
    socket.on('dashboard:request', () => {
      socket.emit('dashboard:data', {
        timestamp: new Date().toISOString(),
        totalStudents: 0,
        presentToday: 0,
        entries: 0,
        exits: 0,
      });
    });

    // Event: Barcode scanned
    socket.on('barcode:scanned', (data) => {
      logger.info(`Barcode scanned: ${data.studentId}`);
      io.emit('barcode:processed', data);
    });

    // Event: Error notification
    socket.on('error:notify', (error) => {
      logger.error(`Socket error: ${error.message}`);
      io.emit('error:broadcast', error);
    });

    socket.on('disconnect', () => {
      logger.info(`Client disconnected: ${socket.id}`);
    });
  });
};

export default setupSocketHandlers;
