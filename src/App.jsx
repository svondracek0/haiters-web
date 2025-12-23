import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Sectors from './components/Sectors';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Sectors />
      <Contact />
    </Layout>
  );
}

export default App;
