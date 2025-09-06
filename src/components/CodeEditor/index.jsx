import {
  javascript,
  javascriptLanguage,
  scopeCompletionSource,
} from '@codemirror/lang-javascript';
import { StateField, EditorState } from '@codemirror/state';
import { EditorView, basicSetup } from 'codemirror';
import * as fabric from 'fabric';
import { debounce } from '../../utils/debounce';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { espresso } from 'thememirror';

export const CodeEditor = ({ code: codeProp, children, canvasId, autoRun = true, runOnChange = true, canvasDown = false }) => {
  const divRef = useRef();
  const editorRef = useRef();

  const [code, setCode] = useState('');

  const runCallback = useCallback(
    debounce((newcode = [codeProp], isClickByRunMeButton = false) => {
      if (window.canvasesId[canvasId]) {
        window.canvasesId[canvasId].dispose();
      }
      const preamble = [
        `const fabric = window.fabric;`,
        `const canvasEl = document.getElementById('${canvasId}');`,
      ];
      // when click 'run me' button, makes code string change to trigger 'setCode' function.
      if (isClickByRunMeButton) preamble.push(`const randomValue = ${Math.random()};`);
      const exec = `try {
          ${newcode.join('\n')}
          window.canvasesId['${canvasId}'] = canvas;
        } catch (error) {
          console.error(error);
          window.dispatchEvent(new CustomEvent('canvas_dispose'));
        }`;
      setCode([...preamble, exec].join('\n'));
    }, 500)
  , []);

  useEffect(() => {
    // need to assign fabric to window
    // and add to window canvases for cleanup/restart
    // seems hacky, maybe it is, but it allow us to use the imported version
    window.fabric = fabric;
    window.canvasesId = window.canvasesId || {};

    // https://github.com/codemirror/dev/issues/44#issuecomment-789093799
    const onChangeHook = StateField.define({
      create: () => null,
      update: (value, transaction) => {
        if (transaction.docChanged) {
          runOnChange && runCallback(transaction.newDoc.toJSON());
        }
        return null;
      },
    });
    const parsedCode = codeProp;

    const startState = EditorState.create({
      doc: parsedCode,
      extensions: [
        javascript(),
        basicSetup,
        javascriptLanguage.data.of({
          autocomplete: scopeCompletionSource(globalThis),
        }),
        onChangeHook,
        espresso,
      ],
    });

    const editor = (editorRef.current = new EditorView({
      state: startState,
      parent: divRef.current,
    }));
    autoRun && runCallback([parsedCode]);
    return () => editor.destroy();
  }, []);

  useEffect(() => {
    const handler = () => console.log('TODO: handle disposing gracefully');
    window.addEventListener('canvas_dispose', handler);
    return () => window.removeEventListener('canvas_dispose', handler);
  });

  return (
    <div className='not-content'>
      <Helmet>
        <script type="module">{code}</script>
      </Helmet>
      {canvasDown || children}
      <div ref={divRef} style={{ marginTop: '1rem' }} />
      <button onClick={() => runCallback([editorRef.current.state.doc.toString()], true)}>Run me</button>
      {canvasDown && children}
    </div>
  );
};
