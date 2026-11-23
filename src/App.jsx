import './App.css';
import CodeWave from './components/CodeWave';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroName from './components/HeroName';

function App() {

  return (
    <>
      <header className="site-header">
        <nav className="hero-nav" aria-label="Portfolio sections">
                <a href="#work">Work</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
          </nav>
      </header>

      <main>
        <section className='hero-section'>
          <div className="hero-text">
            <p className="hero-greeting">HELLO, I'M</p>
            <HeroName />
          </div>
        
          <div className="hero">
          <CodeWave />
          </div>
        </section>
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App
