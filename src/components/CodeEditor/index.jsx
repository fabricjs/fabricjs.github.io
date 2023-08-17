import React, { useEffect, useRef, useCallback } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import {
  javascript,
  javascriptLanguage,
  scopeCompletionSource,
} from '@codemirror/lang-javascript';
import * as fabric from 'fabric';
import { functionToCodeString } from './utils';

export const CodeEditor = ({ code, children, canvasId }) => {
  const divRef = useRef();

  const editorRef = useRef();

  const runCallback = useCallback(() => {
    if (window.canvasesId[canvasId]) {
      window.canvasesId[canvasId].dispose();
    }
    const docChildren = editorRef.current.state.doc.children || [
      editorRef.current.state.doc,
    ];
    const code = docChildren.map((textLeaf) => textLeaf.text.join('\n'));

    const preamble = [
      `const fabric = window.fabric;`,
      `const canvasEl = document.getElementById('${canvasId}');`,
    ];
    const cleanupCode = [`window.canvasesId['${canvasId}'] = canvas`];
    const finalCode = [...preamble, ...code, ...cleanupCode].join('\n');
    eval(finalCode);
  });

  useEffect(() => {
    // need to assign fabric to window
    // and add to window canvases for cleanup/restart
    // seems hacky, maybe it is, but it allow us to use the imported verison
    window.fabric = fabric;
    window.canvasesId = window.canvasesId || {};
    editorRef.current = new EditorView({
      doc: functionToCodeString(code),
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

  // useEffect(() => {
  //   runCallback();
  // }, []);

  return (
    <>
      {children}
      <div ref={divRef} />
      <button onClick={runCallback}>runMe</button>
    </>
  );
};
