import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import NewsletterPage from './pages/NewsletterPage';
import ContactPage from './pages/ContactPage';

import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
