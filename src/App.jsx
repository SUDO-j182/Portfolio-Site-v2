import './App.css'
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import Services from './components/services';

function App() {
  
  return (
    <div className='app'>

      <Navbar />

      <main>
        <Hero />
        <About />
        <br></br>
        <Services />
        <br></br>
        <Projects />
        <br></br>
        <Skills />
        <br></br>
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App
