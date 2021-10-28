import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

class Terminal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { code: '', result: '' };
  }

  showMsg = () => 'Hello World';

  // onChange() {
  //   this.setState({ code: this.props.result });
  // }

  render() {
    if (this.props.result) {
      console.log(this.props.result);
    }
    return (
      // <div
      //   style={{
      //     display: 'flex',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     height: '100vh',
      //   }}
      // >
      <Terminal
        color='green'
        backgroundColor='black'
        barColor='black'
        width='100%'
        style={{ fontWeight: 'bold', fontSize: '1em' }}
        commands={{
          'open-google': () => window.open('https://www.google.com/', '_blank'),
          showmsg: this.showMsg,
          popup: () => alert('Terminal in React'),
        }}
        descriptions={{
          'open-google': 'opens google.com',
          showmsg: 'shows a message',
          alert: 'alert',
          popup: 'alert',
        }}
        msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
        watchConsoleLogging
      />
      // </div>
    );
  }
}

export default Terminal2;
