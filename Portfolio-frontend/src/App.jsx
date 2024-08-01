// src/App.jsx

import { useEffect } from 'react';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />{' '}
      {/* Certifique-se de que este componente esteja dentro do Router */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog />}>
          <Route path='signIn' element={<h1>Sign In</h1>} />
          <Route path='signUp' element={<h1>Sign Up</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
