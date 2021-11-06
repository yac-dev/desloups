import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import { exec, spawn } from 'child_process';

// c++, c, java, typescript
// client sideでは、cとcppで初期のcodeを書き換えないとな。
export const executeClangCode = (request, response) => {
  try {
    let result;
    const { code } = request.body;
    console.log(code);
    let fileName = `${uuidv4()}.c`;
    fs.writeFileSync(fileName, code);

    // const child = spawn('./a.out', []); // child processを作る。
    exec(`gcc ${fileName}`, (err, stdout, stderr) => {
      if (err) {
        console.log(err);
        return;
      }
      if (stderr) {
        console.log(stderr);
        return;
      }
      const child = spawn('./a.out');
      child.stdin.write('4 5');
      child.stdin.end();
      child.stdout.on('data', (data) => {
        result = { type: 'success', data: data.toString() };
      });

      child.stderr.on('data', (data) => {
        result = { type: 'error', data: data.toString() };
      });

      child.on('close', () => {
        fs.unlinkSync(fileName);
        fs.unlinkSync('a.out');
        response.json(result);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const executeJavaCode = (request, response) => {
  try {
    let result;
    const { code } = request.body;
    const javaFile = code.split(' ')[2];
    let fileName = `${javaFile}.java`;
    fs.writeFileSync(fileName, code);
    exec(`javac ${fileName}`, (err, stdout, stderr) => {
      if (err) {
        console.log(err);
        return;
      }
      if (stderr) {
        console.log(stderr);
        return;
      }
      const compiledFile = `${javaFile}.class`;
      const child = spawn('java', [javaFile]);
      child.stdin.write('4 5');
      child.stdin.end();
      child.stdout.on('data', (data) => {
        result = { type: 'success', data: data.toString() };
      });

      child.stderr.on('data', (data) => {
        result = { type: 'error', data: data.toString() };
      });

      child.on('close', () => {
        fs.unlinkSync(fileName);
        fs.unlinkSync(compiledFile);
        response.json(result);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const executeTypeScriptCode = (request, response) => {
  try {
  } catch (error) {}
};
