// Portfolio-server/middlewares/rateLimit.js
'use strict';

import rateLimit from 'express-rate-limit';

/**
 * Very conservative per-IP limiter for abuse prevention
 * Adjust numbers as needed.
 */
export default rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // 5 requests/min/IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' },
});
