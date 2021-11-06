import React from 'react';
import Terminal from 'react-console-emulator';
import './coding.css';

const TerminalSpace = (props) => {
  return (
    <div className='terminal-space'>
      (My Computer) $ nodejs 14.17.5
      <br />
      <span>&gt;</span>
      <p>{props.result}</p>
    </div>
  );
};

export default TerminalSpace;
