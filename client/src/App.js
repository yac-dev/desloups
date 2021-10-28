import React from 'react';

import './App.css';
import CodeEditor from './components/CodeEditor';
import Terminal2 from './components/Terminal2';
// import Terminal from 'react-terminal-ui';
import TerminalController from './components/Terminal';

const App = () => {
  return (
    <div className='coding'>
      <CodeEditor className='editor' />
      {/* <Terminal2
        className='terminal'
        // result={result}
      /> */}
      <TerminalController />
    </div>
  );
};

export default App;
