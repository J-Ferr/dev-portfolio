import './App.css';
import { useState } from 'react';
import CodeWave from './components/CodeWave';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroName from './components/HeroName';

function App() {

  const [workWaveReplay, setWorkWaveReplay] = useState(0);

  function handleWorkClick() {
    if (window.location.hash === "#work") {
      setWorkWaveReplay((count) => count + 1);
    }
  }

  return (
    <>
      <header className="site-header">
        <nav className="hero-nav" aria-label="Portfolio sections">
                <a href="#home">Home</a>
                <a href="#work" onClick={handleWorkClick}>Work</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
          </nav>
      </header>

      <main>
        <section className='hero-section' id="home">
          <div className="hero-text">
            <p className="hero-greeting">HELLO, I'M</p>
            <HeroName />
          </div>
        
          <div className="hero">
          <CodeWave />
          </div>
        </section>
        <Projects waveReplay={workWaveReplay} />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App
