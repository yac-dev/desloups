import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
// import CodeEditor from './components/CodeEditor';
import Terminal2 from './components/Terminal2';
// import Terminal from 'react-terminal-ui';
// import TerminalController from './components/Terminal';

import Navbar from './components/Navbar';
import CodeEditor from './components/CodeEditorNew';
import RunButton from './components/Coding/RunButton';
import MyTerminal from './components/Coding/TerminalNew';

const App = () => {
  // states
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');

  const onRunClick = async () => {
    try {
      console.log(code);
      const result = await axios.post('http://localhost:5000/api/lanugages/javascript', { code });
      console.log(result);
      // setResult(data.data);
    } catch (e) {
      console.log(e);
      alert('OOPS error occured');
    }
  };

  return (
    // <div className='coding'>
    //   <CodeEditor className='editor' />
    //   {/* <Terminal2
    //     className='terminal'
    //     // result={result}
    //   /> */}
    //   <TerminalController />
    <div>
      <Navbar />
      <div className='coding'>
        <CodeEditor code={code} setCode={setCode} />
        {/* <MyTerminal /> */}

        {/* <RunButton onRunClick={onRunClick} /> */}
      </div>
    </div>
  );
};

export default App;
