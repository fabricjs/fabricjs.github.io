import { useEffect } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import {
  javascript,
  javascriptLanguage,
  scopeCompletionSource,
} from '@codemirror/lang-javascript';

export const CodeEditor = ({ code, parent }) => {
  useEffect(() => {
    const destination = document.getElementById('code-editor');
    destination.innerHTML = '';

    let view = new EditorView({
      doc: code,
      extensions: [
        basicSetup,
        javascript(),
        javascriptLanguage.data.of({
          autocomplete: scopeCompletionSource(globalThis),
        }),
      ],
      parent: destination,
    });
  }, []);

  return null;
};
