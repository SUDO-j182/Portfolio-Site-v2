const BASE_URL = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Password Generator",
    description:
      "Lightweight client-side tool for generating secure passwords with custom length and character options. Built for users who need quick, copy-pasteable passwords without relying on third-party services.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/SUDO-j182/password-generator-v1",
    image: `${BASE_URL}projects/password-generator.png`,
  },
  {
    title: "Hash Tools",
    description:
      "Browser-based hash utility for generating and comparing hashes. Useful for integrity checks, debugging and verifying whether two values or files match.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/SUDO-j182/hash-tools-v1",
    image: `${BASE_URL}projects/hash-tools.png`,
  },
  {
    title: "Pixel Editor",
    description:
      "In-browser pixel art editor for creating small icon-sized graphics and favicons. Includes a grid-based canvas, drawing, erasing and clear export behaviour.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/SUDO-j182/pixel-editor-v1",
    image: `${BASE_URL}projects/pixel-editor.png`,
  },
  {
    title: "Code Editor",
    description:
      "Simple browser code editor for HTML/CSS/JS snippets. Designed for quick experiments, testing small ideas and sharing minimal repros of bugs.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/SUDO-j182/code-editor-v1",
    image: `${BASE_URL}projects/code-editor.png`,
  },
  {
    title: "Task Manager",
    description:
      "Full-stack task manager with Node.js, Express and PostgreSQL. Handles adding, tracking and completing tasks with a clean UI, simple API routes and reliable server logic.",
    tech: ["JavaScript", "HTML", "CSS", "Node.js", "Express", "PostgreSQL"],
    link: "https://github.com/SUDO-j182/task-manager-v1",
    image: `${BASE_URL}projects/task-manager.png`,
  },
  {
    title: "Debug Clinic",
    description:
      "Demo project focused on debugging scenarios and small bug-fix exercises. Built to showcase how I approach identifying issues, isolating them and cleaning up the code.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/SUDO-j182/debug-clinic-v1",
    image: `${BASE_URL}projects/debug-clinic.png`,
  },
  {
    title: "Utility Suite",
    description:
      "Collection of small browser utilities (converters, generators and helpers) grouped into a single interface. Shows an ability to bundle multiple focused tools into one clean UI.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/SUDO-j182/utility-suite-v1",
    image: null, // No screenshot yet
  },
  {
    title: "GhostRead AI (v1 prototype)",
    description:
      "Early prototype of a text-analysis assistant interface. Experimental UI and workflow around analysing content and presenting structured output.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/SUDO-j182/ghostRead-ai-v1",
    image: `${BASE_URL}projects/ghostread-ai.png`,
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title}>
            {/* IMAGE BLOCK */}
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="project-image"
              />
            )}

            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech:</strong> {project.tech.join(", ")}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Code
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
