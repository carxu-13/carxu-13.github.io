import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer'
//import Education from './components/Education';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <main className="text-bgtext bg-bgblue body-font">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </main>
  );
}
