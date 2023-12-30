import React from 'react';
import Navbar from './components/navbar/navbar.js';
import Intro from './components/Intro/intro.js';
import Skills from './components/Skills/skills.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
    </div>
  );
}

export default App;
