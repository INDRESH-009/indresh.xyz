// pages/editor.jsx (or app/editor/page.jsx if using App Router)

'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import {common, createLowlight} from 'lowlight'
import Image from '@tiptap/extension-image';
import { useState } from 'react';
import { Markdown } from 'tiptap-markdown';

const lowlight = createLowlight(common)

export default function ObsidianStyleEditor() {
  const [mdxOutput, setMdxOutput] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      Image,
      CodeBlockLowlight.configure({lowlight}),
      Placeholder.configure({
        placeholder: 'Start writing your blog post here...'
      })
    ],
    content: '',
    immediatelyRender: false,

  });

  const exportToMDX = () => {
    if (!editor) return;
    const md = Markdown(editor.getJSON());
    const frontmatter = `---\ntitle: "Your Title"\ndate: "${new Date().toISOString().split('T')[0]}"\nexcerpt: "Short summary here."\n---\n\n`;
    setMdxOutput(frontmatter + md);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="border border-gray-200 rounded-lg shadow bg-white p-4 mb-6">
        <EditorContent editor={editor} className="prose max-w-none min-h-[300px]" />
      </div>

      <button
        onClick={exportToMDX}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Export to MDX
      </button>

      {mdxOutput && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Generated MDX:</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm whitespace-pre-wrap">
            {mdxOutput}
          </pre>
        </div>
      )}
    </div>
  );
}
