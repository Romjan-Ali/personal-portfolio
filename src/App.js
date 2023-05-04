import React from 'react';
import './App.css';

import Header from './components/Header';
import Myself from './components/Myself';
import Skills from './components/Skills';
import RecentProjects from './components/RecentProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <Myself />
      <Skills />
      <RecentProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
