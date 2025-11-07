// Portfolio-server/controllers/contact.controller.js
'use strict';

import { sendMail } from '../services/mailer.service.js';
import asyncHandler from '../utils/asyncHandler.js';

/**
 * Controller responsible for sending contact emails
 * - Validated by validateContact middleware
 */
export const sendContactEmail = asyncHandler(async (req, res) => {
  const { firstName, lastName, contact, email, message } = req.body;

  // Compose a clear subject and body for your inbox
  const subject = `New portfolio contact: ${firstName} ${lastName}`;
  const text = [
    `From : ${firstName} ${lastName}`,
    `Email: ${email}`,
    contact ? `Phone/Contact: ${contact}` : null,
    '',
    'Message:',
    message,
  ]
    .filter(Boolean)
    .join('\n');

  await sendMail({ subject, text });

  res.status(200).json({ success: true, message: 'Email sent successfully' });
});
