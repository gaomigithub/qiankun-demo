import { Editor, EditorProps, OnChange, useMonaco } from '@monaco-editor/react';
import MonacoEditor from '@alilc/lowcode-plugin-base-monaco-editor';
import { useEffect, useRef } from 'react';
import { format } from 'prettier';

export interface IAdaEditorProps {
  value?: string;
  onChange?: OnChange;
  monacoProps?: EditorProps;
}

const AdaEditor: React.FC<IAdaEditorProps> = (props) => {
  const { value, onChange, monacoProps } = props;

  return (
    <div style={{ border: '1px solid #f1f1f1', paddingTop: '10px' }}>
      <MonacoEditor
        height={'300px'}
        language="javascript"
        options={{
          lineNumbers: 'on',
          wordWrap: 'on',
          glyphMargin: false,
          folding: true,
          lineDecorationsWidth: 10,
          lineNumbersMinChars: 3,
          minimap: {
            enabled: false,
          },

          scrollbar: {
            verticalScrollbarSize: 10,
            horizontalScrollbarSize: 10,
            alwaysConsumeMouseWheel: false,
          },
        }}
        {...monacoProps}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default AdaEditor;
