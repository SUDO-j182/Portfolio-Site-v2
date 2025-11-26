import './App.css'
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
  
  return (
    <div className='app'>

      <Navbar />

      <main>

        <Hero />

        <About />

        <Projects />

        <Skills />

        <Contact />

      </main>
      <Footer />
    </div>
  );
}

export default App
