import React from 'react';
import About from './component/About/About';
import ContactMe from './component/Contactme/ContactMe';
import Header from './component/Header/Header';
import Intro from './component/intro/intro';
import Projects from './component/Projects/Projects';
import Skills from './component/Skills/Skills';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactMe/>
    </React.Fragment>
  );
}

export default App;
