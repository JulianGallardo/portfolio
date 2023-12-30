import React from 'react';
import Navbar from './components/navbar/navbar.js';
import Intro from './components/Intro/intro.js';
import Skills from './components/Skills/skills.js';
import Works from './components/Works/works.js';
import Contact from './components/Contact/contact.js';
import Footer from './components/Footer/footer.js';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
