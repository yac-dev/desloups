import express from 'express';
// import { spawn } from 'child_process';
// import fs from 'fs';
// import { v4 as uuidv4 } from 'uuid';
import { executeCode } from '../controllers/languages';
import { executeClangCode, executeJavaCode } from '../controllers/compilingLangs';

const router = express.Router();

router.post('/c', executeClangCode);
router.post('/java', executeJavaCode);
router.post('/javascript', executeCode);
router.post('/python', executeCode);
router.post('/php', executeCode);
router.post('/ruby', executeCode);

export default router;
