// Portfolio-server/middlewares/validate.js
'use strict';

/**
 * Minimal validation for the contact form payload
 * Ensures required fields and a valid email
 */
export function validateContact(req, res, next) {
  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  next();
}
