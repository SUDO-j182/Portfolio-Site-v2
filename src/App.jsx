import './App.css'

function App() {
  
  return (
    <div>
      <header>
        <h1>Jai Drakulic</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="hero">
          <h2>Web Developer In Progress</h2>
          <p>Im learning react and modern web tools.</p>
        </section>

        <section id="about">
          <h2>About</h2>
          <p>INTRO PLACEHOLDER</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <p>PROJECT CARDS GO HERE LATER</p>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML, CSS JavaScript basics</li>
            <li>Currently learning react</li>
            <li>Tools: vs code and git</li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            SOCIAL LINKS CAN GO HERE LATER
          </p>
        </section>
      </main>
    </div>
  );
}

export default App
