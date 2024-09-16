import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBlog } from '../redux/blog/blogSlice';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditBlog() {
  const { id } = useParams();
  const blogs = useSelector(state => state.blogs.blogs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blog = blogs.find(blog => blog.id === id);

  const [title, setTitle] = useState(blog?.title || '');
  const [content, setContent] = useState(blog?.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBlog({ id, title, content }));
    navigate('/blogs');
  };

  useEffect(() => {
    if (!blog) {
      navigate('/blogs');  
    }
  }, [blog, navigate]);

  return blog ? (
    <div className="container mx-auto my-4">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border px-3 py-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Update Blog
        </button>
      </form>
    </div>
  ) : null;
}
