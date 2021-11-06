// import React from 'react';
// import './coding.css';

// const CodeEditor = () => {
//   return <div className='code-editor'>Code Editor</div>;
// };

// export default CodeEditor;

import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';

import TerminalController from '../Terminal';
import Terminal2 from '../Terminal2';

const CodeEditor = (props) => {
  // 結果に関しては、おそらくmap等を使って展開していくことになるだろね。
  // たまに、OOPSになるのはなんだろね。console.logの結果も少しおかしいし。。。。
  return (
    <div className='code-editor'>
      <Editor
        options={{
          acceptSuggestionOnCommitCharacter: true,
          acceptSuggestionOnEnter: 'on',
          automaticLayout: true,
          codeLens: true,
          colorDecorators: true,
          cursorBlinking: 'blink',
          quickSuggestions: true,
          quickSuggestionsDelay: 100,
        }}
        height='40vh'
        defaultLanguage='javascript'
        defaultValue={props.code}
        onChange={(value) => {
          if (value) {
            props.setCode(value);
          }
        }}
      />

      <button type='button' onClick={props.onRunSubmit}>
        Run
      </button>
      {/* <div style={{ border: '1px solid black', padding: '16px', margin: '16px auto' }}>{props.result}</div> */}
      {/* <TerminalController result={result} /> */}
    </div>
  );
};

export default CodeEditor;
