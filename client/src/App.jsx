import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import CreateBlog from './components/CreateBlog';
import BlogList from './components/BlogList';
import EditBlog from './components/EditBlog';
import 'quill/dist/quill.snow.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
       
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
