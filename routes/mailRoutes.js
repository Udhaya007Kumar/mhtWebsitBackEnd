import express from 'express';
import { sendFormMail } from '../controllers/mailController.js';

const router = express.Router();

router.post('/send-form', sendFormMail);

export default router;
