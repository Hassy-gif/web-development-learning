// Projects showcases sample work in a simple card layout.
const projects = [
  {
    name: 'Password Security Lab',
    description: 'A hands-on concept project focused on safe password practices and security awareness.',
  },
  {
    name: 'SecureGate Login System',
    description: 'A sample login experience designed with secure flow and clean interface principles.',
  },
  {
    name: 'React Profile Card',
    description: 'A beginner-friendly React component project that highlights personal information in style.',
  },
];

function Projects() {
  return (
    <section id="projects" className="info-section">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Sample projects I am proud of</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.name} className="card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
