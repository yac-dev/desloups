import React from 'react';

const RunButton = (props) => {
  return (
    <>
      <button class='huge ui button' onClick={props.onRunClick}>
        Run
      </button>
    </>
  );
};

export default RunButton;
