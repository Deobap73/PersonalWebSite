// Portfolio-server/utils/asyncHandler.js
'use strict';

/**
 * Wrap async route handlers and forward errors to Express
 */
export default function asyncHandler(fn) {
  return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}
