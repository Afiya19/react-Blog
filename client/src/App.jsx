import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateBlog from './components/CreateBlog';
import BlogList from './components/BlogList';
import EditBlog from './components/EditBlog';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
