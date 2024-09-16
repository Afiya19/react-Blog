import React, { useState, useRef } from 'react';
import Quill from 'quill';

export default function TextEditor() {
  const [content, setContent] = useState(''); // State to hold the content
  const editorRef = useRef(null);

  // Initialize Quill when the component is mounted
  React.useEffect(() => {
    const quill = new Quill(editorRef.current, {
      theme: 'snow',  // Quill has different themes: 'snow' is the default
      placeholder: 'Compose your blog post...',
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image']
        ]
      }
    });

    quill.on('text-change', () => {
      setContent(quill.root.innerHTML); // Get editor content
    });
  }, []);

  return (
    <div>
      <div ref={editorRef} style={{ height: '300px' }}></div> {/* Editor container */}
      <div className="mt-4">
        <h3>Preview</h3>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
}
