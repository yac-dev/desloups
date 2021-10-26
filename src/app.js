import express from 'express';
import { spawn } from 'child_process';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  response.json('helooooooooo');
});

app.post('/javascript', async (request, response) => {
  try {
    const { code } = request.body;
    let result;
    let fileName = `${uuidv4()}.js`;

    fs.writeFileSync(fileName, code); // 実際に、file systemにjs codeが書かれたfileを作る。まあ、最終的に消すけど。
    const JavaScript = spawn('node', [fileName]);
  } catch (error) {
    console.log(error);
  }
});

export default app;
