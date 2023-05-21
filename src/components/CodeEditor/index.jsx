import React, { useEffect, useRef, useCallback } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import {
  javascript,
  javascriptLanguage,
  scopeCompletionSource,
} from '@codemirror/lang-javascript';
import * as fabric from 'fabric';

export const CodeEditor = ({ code, children, canvasId }) => {
  const divRef = useRef();

  const editorRef = useRef();

  const runCallback = useCallback(() => {
    if (window.canvasesId[canvasId]) {
      window.canvasesId[canvasId].dispose();
    }
    const code = editorRef.current.state.doc.text;
    const preamble = [
      `const fabric =  window.fabric;`,
      `const canvasEl = document.getElementById('${canvasId}');`,
    ];
    const cleanupCode = [`window.canvasesId['${canvasId}'] = canvas`];
    const finalCode = [...preamble, ...code, ...cleanupCode].join('\n');
    eval(finalCode);
  });

  useEffect(() => {
    window.fabric = fabric;
    window.canvasesId = window.canvasesId || {};
    editorRef.current = new EditorView({
      doc: code,
      extensions: [
        basicSetup,
        javascript(),
        javascriptLanguage.data.of({
          autocomplete: scopeCompletionSource(globalThis),
        }),
      ],
      parent: divRef.current,
    });
  }, []);

  return (
    <>
      {children}
      <div ref={divRef} />
      <button onClick={runCallback}>runMe</button>
    </>
  );
};
