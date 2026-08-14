const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "PHP",
  "Laravel",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-label">
        02 — SKILLS
      </div>

      <div className="skills-header">
        <h2>
          Technologies I
          <br />
          <span>work with.</span>
        </h2>

        <p>
          These are some of the technologies I've learned
          through my studies and personal projects.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill}>
            <span>0{index + 1}</span>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;