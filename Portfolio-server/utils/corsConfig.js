// Portfolio-server/utils/corsConfig.js
'use strict';

import dotenv from 'dotenv';
dotenv.config();

const allowed = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

/**
 * Allow same-origin in dev (no Origin header) and configured origins in prod
 */
export const corsOptions = {
  origin(origin, callback) {
    if (!origin) return callback(null, true); // e.g., curl or same-origin
    if (allowed.includes(origin)) return callback(null, true);
    return callback(new Error('CORS not allowed'), false);
  },
};
