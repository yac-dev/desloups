import React, { useState } from 'react';
import './coding.css';
import CodeEditor from './CodeEditor';
import TerminalSpace from './TerminalSpace';

import axios from 'axios';

const CodingSpace = () => {
  const defaultCode = "const welcome = () => {\n  console.log('welcome to JavaScript Playground!')\n}\n\nwelcome()";
  const [code, setCode] = useState(defaultCode);
  const [result, setResult] = useState('');

  const onRunSubmit = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/languages/javascript', {
        code,
      });
      setResult(data.data);
      console.log(result);
    } catch (e) {
      alert('OOPS error occured');
    }
  };

  return (
    <div className='coding-space'>
      <CodeEditor code={code} setCode={setCode} onRunSubmit={onRunSubmit} result={result} />
      <TerminalSpace result={result} />
    </div>
  );
};

export default CodingSpace;
