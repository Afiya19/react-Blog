import React, { useState, useRef } from 'react';
import Quill from 'quill';

export default function TextEditor() {
  const [content, setContent] = useState(''); 
  const editorRef = useRef(null);

  React.useEffect(() => {
    const quill = new Quill(editorRef.current, {
      theme: 'snow',  
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
      setContent(quill.root.innerHTML);
    });
  }, []);

  return (
    <div>
      <div ref={editorRef} style={{ height: '300px' }}></div> 
      <div className="mt-4">
        <h3>Preview</h3>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
}
