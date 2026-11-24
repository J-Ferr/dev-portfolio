import './App.css';
import { useState, useEffect, useRef } from 'react';
import CodeWave from './components/CodeWave';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroName from './components/HeroName';

function App() {

  const [heroReplay, setHeroReplay] = useState(0);
  const [workWaveReplay, setWorkWaveReplay] = useState(0);
  const [aboutWaveReplay, setAboutWaveReplay] = useState(0);

  function handleWorkClick() {
    if (window.location.hash === "#work") {
      setWorkWaveReplay((count) => count + 1);
    }
  }

  return (
    <>
      <header className="site-header">
        <nav className="hero-nav" aria-label="Portfolio sections">
                <a href="#home" onClick={() => setHeroReplay(count => count + 1)}>
                  Home</a>
                <a href="#work" onClick={handleWorkClick}>
                  Work</a>
                <a href="#about" onClick={() => setAboutWaveReplay(count => count + 1)}>
                  About</a>
                <a href="#contact">
                  Contact</a>
          </nav>
      </header>

      <main>
        <section className='hero-section' id="home">
          <div className="hero-text" key={`hero-text-${heroReplay}`}>
            <p className="hero-greeting">HELLO, I'M</p>
            <HeroName />
          </div>
        
          <div className="hero" key={`hero-wave-${heroReplay}`}>
          <CodeWave />
          </div>
        </section>

        <Projects waveReplay={workWaveReplay} />
        <About waveReplay={aboutWaveReplay} />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App
