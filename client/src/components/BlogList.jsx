import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBlog } from '../redux/blog/blogSlice';

export default function BlogList() {
  const blogs = useSelector(state => state.blogs.blogs);
  const searchQuery = useSelector(state => state.blogs.searchQuery);  
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };

  
  const filteredBlogs = searchQuery
    ? blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogs; 

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      {filteredBlogs.length === 0 ? (
        <p>No blogs available</p>
      ) : (
        filteredBlogs.map(blog => (
          <div key={blog.id} className="border p-4 mb-4">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p>{blog.content}</p>
            <div className="mt-2">
              <Link to={`/edit-blog/${blog.id}`} className="text-blue-500 mr-4">Edit</Link>
              <button onClick={() => handleDelete(blog.id)} className="text-red-500">Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
