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
