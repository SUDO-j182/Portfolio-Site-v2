const projects = [
  {
  title: "Password Generator Tool",
  description: "Built a lightweight client-side tool that allows users to generate secure passwords with custom length and character settings. Focused on clean UI and easy functionality.",
  tech: ["JavaScript", "HTML", "CSS"],
  link: "https://github.com/YOURUSERNAME/password-generator-v1"
},
{
  title: "Hash Comparison Utility",
  description: "Developed a browser tool that compares hash outputs in real time. Useful for integrity checks, debugging, and file verification workflows.",
  tech: ["JavaScript"],
  link: "https://github.com/YOURUSERNAME/hash-comparison-tool"
}
];


function Projects () {
    return (
         <section id="projects">
          <h2>Projects</h2>

          <div className="projects-grid">
            {projects.map((project) => (
            <article key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p><strong>Tech:</strong> {project.tech.join(", ")}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">View Code</a>
            </article>
  ))}
</div>
        </section>
    );
}
export default Projects;