import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';

import TerminalController from './Terminal';
import Terminal2 from './Terminal2';

const View = () => {
  const options = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: false,
    theme: 'vs-dark',
    scrollbar: {
      // Subtle shadows to the left & top. Defaults to true.
      useShadows: false,
      // Render vertical arrows. Defaults to false.
      verticalHasArrows: true,
      // Render horizontal arrows. Defaults to false.
      horizontalHasArrows: true,
      // Render vertical scrollbar.
      // Accepted values: 'auto', 'visible', 'hidden'.
      // Defaults to 'auto'
      vertical: 'visible',
      // Render horizontal scrollbar.
      // Accepted values: 'auto', 'visible', 'hidden'.
      // Defaults to 'auto'
      horizontal: 'visible',
      verticalScrollbarSize: 17,
      horizontalScrollbarSize: 17,
      arrowSize: 30,
    },
  };
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async () => {
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
    <>
      <Editor
        // className='editor'
        // options={{
        //   acceptSuggestionOnCommitCharacter: true,
        //   acceptSuggestionOnEnter: 'on',
        //   automaticLayout: true,
        //   codeLens: true,
        //   colorDecorators: true,
        //   cursorBlinking: 'blink',
        //   quickSuggestions: true,
        //   quickSuggestionsDelay: 100,
        // }}
        options={options}
        height='100vh'
        // width='50%'
        defaultLanguage='javascript'
        defaultValue={code}
        onChange={(value) => {
          if (value) {
            setCode(value);
          }
        }}
      />
      {/* <div style={{ border: '1px solid black', padding: '16px', margin: '16px auto' }}>{result}</div> */}
      {/* <button type='button' onClick={handleSubmit}>
        Run
      </button> */}
      {/* <TerminalController result={result} /> */}
    </>
  );
};

export default View;

// export { CodeEditor };

// import React, { useState } from 'react';
// import MonacoEditor from '@uiw/react-monacoeditor';

// const code = `import React, { PureComponent } from 'react';
// import MonacoEditor from '@uiw/react-monacoeditor';

// export default class App extends PureComponent {
//   render() {
//     return (
//       <MonacoEditor
//         language="html"
//         value="<h1>I ♥ react-codemirror2</h1>"
//         options={{
//           selectOnLineNumbers: true,
//           roundedSelection: false,
//           cursorStyle: 'line',
//           automaticLayout: false,
//           theme: 'vs-dark',
//         }}
//       />
//     );
//   }
// }
// `;

// const CodeEditor = () => {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     code: '// type your code...',
//   //   };
//   // }

//   const [code, setCode] = useState();

//   const editorDidMount = (editor, monaco) => {
//     console.log('editorDidMount', editor, monaco);
//     editor.focus();
//   };
//   const onChange = (newValue, e) => {
//     console.log('onChange', newValue, e);
//   };

//   const options = {
//     selectOnLineNumbers: true,
//     roundedSelection: false,
//     readOnly: false,
//     cursorStyle: 'line',
//     automaticLayout: false,
//     theme: 'vs-dark',
//     scrollbar: {
//       // Subtle shadows to the left & top. Defaults to true.
//       useShadows: false,
//       // Render vertical arrows. Defaults to false.
//       verticalHasArrows: true,
//       // Render horizontal arrows. Defaults to false.
//       horizontalHasArrows: true,
//       // Render vertical scrollbar.
//       // Accepted values: 'auto', 'visible', 'hidden'.
//       // Defaults to 'auto'
//       vertical: 'visible',
//       // Render horizontal scrollbar.
//       // Accepted values: 'auto', 'visible', 'hidden'.
//       // Defaults to 'auto'
//       horizontal: 'visible',
//       verticalScrollbarSize: 17,
//       horizontalScrollbarSize: 17,
//       arrowSize: 30,
//     },
//   };

//   return (
//     <MonacoEditor
//       height='500px'
//       language='javascript'
//       // editorDidMount={this.editorDidMount.bind(this)}
//       // onChange={this.onChange.bind(this)}
//       value={code}
//       options={options}
//     />
//   );
// };
