// Portfolio-server/routes/contact.routes.js
'use strict';

import { Router } from 'express';
import { sendContactEmail } from '../controllers/contact.controller.js';
import { validateContact } from '../middlewares/validate.js';

const router = Router();

// POST /api/contact
router.post('/', validateContact, sendContactEmail);

export default router;
