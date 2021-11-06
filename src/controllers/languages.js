import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import { spawn } from 'child_process';

export const executeCode = (request, response) => {
  try {
    let result;
    let command;
    let extension;
    console.log(request.originalUrl);
    const whichLanguage = request.originalUrl.split('/')[3];
    console.log(whichLanguage);
    switch (whichLanguage) {
      case 'javascript':
        command = 'node';
        extension = 'js';
        break;
      case 'python':
        command = 'python';
        extension = 'py';
        break;
      case 'php':
        command = 'php';
        extension = 'php';
        break;
      case 'ruby':
        command = 'ruby';
        extension = 'rb';
        break;
      default:
        console.log('ohhh...');
    } // とりあえずまずこの3つ。

    const { code } = request.body;
    let fileName = `${uuidv4()}.${extension}`;

    fs.writeFileSync(fileName, code); // 実際に、file systemにjs codeが書かれたfileを作る。
    const language = spawn(command, [fileName]); // 実行

    language.stdout.on('data', (data) => {
      result = { type: 'success', data: data.toString() };
    });

    language.stderr.on('data', (data) => {
      result = { type: 'error', data: data.toString() };
    });

    language.on('close', () => {
      fs.unlinkSync(fileName);
      response.json(result);
    });
    //
  } catch (error) {
    console.log(error);
    fs.unlinkSync(fileName);
    console.log('what ....');
  }
};
