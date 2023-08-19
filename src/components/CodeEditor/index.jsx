import {
  javascript,
  javascriptLanguage,
  scopeCompletionSource,
} from '@codemirror/lang-javascript';
import { StateField } from '@codemirror/state';
import { EditorView, basicSetup } from 'codemirror';
import * as fabric from 'fabric';
import { debounce } from 'lodash';
import React, { useCallback, useEffect, useRef } from 'react';
import { functionToCodeString } from './utils';

export const CodeEditor = ({ code, children, canvasId }) => {
  const divRef = useRef();

  const editorRef = useRef();

  const runCallback = useCallback(
    debounce((code) => {
      if (window.canvasesId[canvasId]) {
        window.canvasesId[canvasId].dispose();
      }
      const editor = editorRef.current;
      code =
        code ||
        editor.state.doc.children ||
        [editor.state.doc].map((textLeaf) => textLeaf.text.join('\n'));

      const preamble = [
        `const fabric = window.fabric;`,
        `const canvasEl = document.getElementById('${canvasId}');`,
      ];
      const cleanupCode = [`window.canvasesId['${canvasId}'] = canvas`];
      const finalCode = [...preamble, ...code, ...cleanupCode].join('\n');
      try {
        eval(finalCode);
      } catch (error) {
        console.log('codemirror', error);
      }
    }, 500)
  );

  useEffect(() => {
    // need to assign fabric to window
    // and add to window canvases for cleanup/restart
    // seems hacky, maybe it is, but it allow us to use the imported verison
    window.fabric = fabric;
    window.canvasesId = window.canvasesId || {};

    // https://github.com/codemirror/dev/issues/44#issuecomment-789093799
    const listenChangesExtension = StateField.define({
      create: () => null,
      update: (value, transaction) => {
        if (transaction.docChanged) {
          runCallback(transaction.newDoc.toJSON());
        }
        return null;
      },
    });

    const editor = (editorRef.current = new EditorView({
      doc: functionToCodeString(code),
      extensions: [
        basicSetup,
        javascript(),
        javascriptLanguage.data.of({
          autocomplete: scopeCompletionSource(globalThis),
        }),
        listenChangesExtension,
      ],
      parent: divRef.current,
    }));

    return () => editor.destroy();
  }, [runCallback]);

  useEffect(() => {
    runCallback();
  }, []);

  return (
    <>
      {children}
      <div ref={divRef} />
    </>
  );
};
