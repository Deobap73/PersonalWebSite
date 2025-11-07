'use strict';

export async function sendMessage(payload) {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.error('❌ Error sending message:', err);
    throw new Error('Failed to send message');
  }
}
