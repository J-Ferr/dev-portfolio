import './App.css';
import heroImage from './assets/hero.png';
import CodeWave from './components/CodeWave';
import Projects from './components/Projects';

function App() {

  return (
    <>
      <section className='hero-section'>
        <div className="hero-text">
          <p className="hero-greeting">HELLO, I'M</p>
          <h1>Jose Armando</h1>
            <h2>Junior Software Engineer</h2>
              <p>I create thoughtful digital experiences through technology and creativity.</p>
        </div>
        
        <div className="hero">
        <CodeWave />
        </div>
      </section>
      <Projects />
    </>
  )
}

export default App
