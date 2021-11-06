import React from 'react';
import Terminal from 'react-console-emulator';

class MyTerminal extends React.Component {
  constructor(props) {
    super(props);
    this.terminal = React.createRef();
  }

  // Experimental syntax, requires Babel with the transform-class-properties plugin
  // You may also define commands within render in case you don't have access to class field syntax
  commands = {
    wait: {
      description: 'Waits one second and sends a message.',
      fn: () => {
        const terminal = this.terminal.current;
        setTimeout(() => terminal.pushToStdout('Hello after 1 second!'), 1500);
        return 'Running, please wait...';
      },
    },
  };

  render() {
    return (
      <Terminal
        ref={this.terminal} // Assign ref to the terminal here
        commands={this.commands}
      />
    );
  }
}

export default MyTerminal;
