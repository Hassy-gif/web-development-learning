// Skills lists the main technical areas and strengths.
const skills = ['Software Development', 'Cybersecurity', 'React', 'JavaScript', 'HTML & CSS', 'Problem Solving', 'UI Design'];

function Skills() {
  return (
    <section id="skills" className="info-section">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>What I am learning and building with</h2>
      </div>
      <div className="skill-list">
        {skills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
