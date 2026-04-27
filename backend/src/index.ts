import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import projectRoutes from './routes/projectRoutes.js';
import authRoutes from './routes/authRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/settings', settingsRoutes);



const PORT = process.env.PORT || 5000;

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, '../../frontend/dist')));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../frontend', 'dist', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
      res.send('Yari Tech API is running!');
  });
}

// Basic Error Handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`);
});