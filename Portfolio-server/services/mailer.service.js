// Portfolio-server/services/mailer.service.js
'use strict';

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Nodemailer transporter configured for Hostinger SMTP
 * - secure: true when using port 465 (SSL)
 * - secure: false for port 587 (STARTTLS)
 */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Sends a plain-text email to your inbox
 */
export async function sendMail({ subject, text }) {
  const info = await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject,
    text,
  });

  console.log(`📨 Email sent: ${info.messageId}`);
  return info;
}
