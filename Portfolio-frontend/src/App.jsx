// src/App.jsx

import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import { BlogEditorPages } from './components/Blog/Pages/BlogEditorPages';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog/*' element={<Blog />} />
        <Route path='/editor' element={<BlogEditorPages />} />
      </Routes>
    </>
  );
}

export default App;
