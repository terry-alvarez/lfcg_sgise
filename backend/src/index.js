import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server as SocketIO } from 'socket.io';
import logger from './utils/logger.js';
import { setupSocketHandlers } from './socket/handlers.js';
import authRoutes from './routes/auth.routes.js';
import studentRoutes from './routes/student.routes.js';
import accessRoutes from './routes/access.routes.js';
import reportRoutes from './routes/report.routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './config/swagger.js';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new SocketIO(httpServer, {
  cors: {
    origin: process.env.SOCKET_CORS_ORIGIN || '*',
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/access', accessRoutes);
app.use('/api/v1/reports', reportRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Socket.IO setup
if (process.env.SOCKET_ENABLED === 'true') {
  setupSocketHandlers(io);
}

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500,
    },
  });
});

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
  logger.info(`API Documentation: http://localhost:${PORT}/api-docs`);
});
