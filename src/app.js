import express from 'express';
import cors from 'cors';

import languagesRouter from './routes/languages';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/languages', languagesRouter);

export default app;
