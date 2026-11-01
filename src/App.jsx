import './App.css';
import CodeWave from './components/CodeWave';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <main>
        <section className='hero-section'>
          <div className="hero-text">
            <p className="hero-greeting">HELLO, I'M</p>
            <h1>Jose Armando Arellano Ferrara</h1>
              <h2>Junior Software Engineer</h2>
                <p>I build intuitive, purposeful web applications that bring ideas to life.</p>
          </div>
        
          <div className="hero">
          <CodeWave />
          </div>
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App
