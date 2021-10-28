import express from 'express';
// import { spawn } from 'child_process';
// import fs from 'fs';
// import { v4 as uuidv4 } from 'uuid';
import { executeCode } from '../controllers/languages';

const router = express.Router();

router.post('/javascript', executeCode);
router.post('/python', executeCode);
router.post('/java', executeCode);
router.post('/ruby', executeCode);

export default router;
