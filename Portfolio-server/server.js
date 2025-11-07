// Portfolio-server/server.js
'use strict';

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from './middlewares/rateLimit.js';
import { corsOptions } from './utils/corsConfig.js';
import contactRoutes from './routes/contact.routes.js';

dotenv.config();

const app = express();

// Security & parsing
app.use(helmet());
app.use(express.json());

// CORS
app.use(cors(corsOptions));

// Basic rate limit for all routes (defense-in-depth)
app.use(rateLimit);

// Healthcheck for Render
app.get('/healthz', (req, res) => res.status(200).json({ status: 'ok' }));

// Contact API
app.use('/api/contact', contactRoutes);

// Global error handler (simple)
app.use((err, req, res, _next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Mail microservice running on port ${PORT}`);
});
