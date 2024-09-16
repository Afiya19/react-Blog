import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../redux/blog/blogSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import TextEditor from './TextEditor';  

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { id: uuidv4(), title, content };  
    dispatch(createBlog(newBlog));
    navigate('/blogs');
  };

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
             className="border px-3 py-2 w-full text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Content</label>
          <TextEditor content={content} setContent={setContent} /> 
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Blog
        </button>
      </form>
    </div>
  );
}
