import {
  javascript,
  javascriptLanguage,
  scopeCompletionSource,
} from '@codemirror/lang-javascript';
import { EditorState, StateField } from '@codemirror/state';
import { EditorView, basicSetup } from 'codemirror';
import { debounce } from 'lodash';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Helmet } from 'react-helmet';
import * as fabric from './fabric';

export const useCodeSnippet = (scripts, dir) => {
  const { publicURL } = useMemo(
    () => scripts.find(({ relativeDirectory }) => relativeDirectory === dir),
    [scripts, dir]
  );
  const [code, setCode] = useState('');
  useEffect(() => {
    fetch(publicURL)
      .then((res) => res.text())
      .then((code) => {
        setCode(code);
      });
  }, [publicURL]);
  return code;
};

export const CodeEditor = ({ code: _code }) => {
  const divRef = useRef();
  const editorRef = useRef();
  const [code, setCode] = useState('');

  const runCode = useCallback(
    debounce((code = editorRef.current.state.doc.toJSON().join('\n')) => {
      setCode(`
      fabric.cleanup();
      try {
        ${code.replace(
          `import * as fabric from 'fabric';`,
          `const fabric = window.fabric;`
        )} 
      } catch(error) {
        fabric.cleanup();
        console.error(error);
        window.dispatchEvent(new CustomEvent('demo_error', { detail: error }));
       }`);
    }, 500)
  );

  useEffect(() => {
    const handler = ({ detail }) => {
      // do something
    };
    window.addEventListener('demo_error', handler, { once: true });
    return () => window.removeEventListener('demo_error', handler);
  }, []);

  useEffect(() => {
    // need to assign fabric to window
    // TODO: support importing
    window.fabric = fabric;

    // https://github.com/codemirror/dev/issues/44#issuecomment-789093799
    const onChangeHook = StateField.define({
      create: () => null,
      update: (value, transaction) => {
        if (transaction.docChanged) {
          runCode(transaction.newDoc.toJSON().join('\n'));
        }
        return null;
      },
    });

    const startState = EditorState.create({
      doc: _code,
      extensions: [
        javascript(),
        basicSetup,
        javascriptLanguage.data.of({
          autocomplete: scopeCompletionSource(globalThis),
        }),
        onChangeHook,
      ],
    });

    const editor = (editorRef.current = new EditorView({
      state: startState,
      parent: divRef.current,
    }));

    runCode(_code);

    return () => editor.destroy();
  }, [_code]);

  return (
    <>
      <Helmet>
        <script type="module">{code}</script>
      </Helmet>
      <div ref={divRef} />
      <button onClick={() => runCode()}>runMe</button>
    </>
  );
};
