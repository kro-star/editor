import React, { useState, useEffect, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from "@codemirror/view";
import { dracula } from '@uiw/codemirror-theme-dracula';
import { python } from '@codemirror/lang-python'

interface CodeEditorProps {
  initialCode?: string;
  onChange: (code: string) => void;
  theme?: string;
  language: string;
  code?: string;
  
}
const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode = "",
  onChange,
  theme = 'dracula',
  language = 'javaScript',
  code = ''
}) => {
  const editorRef = useRef<EditorView | null>(null);

  useEffect(() => {
    onChange(initialCode)
  }, [initialCode]);


  const handleChange = (value: string) => {
      onChange(value);
    if (onChange) {
      onChange(value);
    }
  };

  
let extensions = [];
  switch (language) {
      case "javascript":
          extensions = [javascript()]
          break
      case "python":
          extensions = [python()]
          break
      default:
          extensions = [javascript()]
  }

  const elCodeMirror = document.querySelector('.task-text') as HTMLElement | null;
  let heigthCodeMirror: string;
    if (elCodeMirror) {
      heigthCodeMirror = (elCodeMirror.offsetHeight * 2 / 3) + 'px';
    } else {
      heigthCodeMirror =  '500px'; 
    }

  return (
    <div className="code-editor-container h-100">
        <CodeMirror
            value={code}
            theme={theme === 'dracula' ? dracula : undefined}
            height={heigthCodeMirror}
            extensions={extensions}
            onChange={handleChange}
            onUpdate={(update) => {
                editorRef.current = update.view;
            }}
        />
    </div>
  );
};

export { CodeEditor }