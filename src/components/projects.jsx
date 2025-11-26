const projects = [
    {
        title: "Password Generator",
        description: "A tool that generates secure random passwords based on user preferences.",
        tech: ["Javascript", "HTML", "CSS"],
        link: "#"
    },
    {
        title: "Hash Comparisom Tool",
        description: "Checks if two hashed values match",
        tech: ["Javascript", "HTML", "CSS"],
        link: "#"
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
            </article>
  ))}
</div>
        </section>
    );
}
export default Projects;