const education = [
  {
    title: "Digital Development — Full Stack",
    institution: "OFPPT — ISTAG Bab Tizimi, Meknès",
    period: "2024 — 2026",
    type: "DIPLOMA",
    description:
      "Training in full-stack web development, including React, Laravel, databases, cloud technologies and agile methodologies.",
  },
];

const certifications = [
  {
    title: "Digital Development — Full Stack",
    institution: "OFPPT",
    year: "2026",
    type: "DIPLOMA",
  },
];

function Education() {
  return (
    <section className="education-section" id="education">

      <div className="section-label">
        03 — EDUCATION & CERTIFICATIONS
      </div>

      <div className="education-header">
        <h2>
          Learning,
          <br />
          <span>building & growing.</span>
        </h2>

        <p>
          My academic background and certifications reflect
          my journey in technology and continuous learning.
        </p>
      </div>

      <div className="education-content">

        {/* EDUCATION */}

        <div className="education-column">

          <h3 className="education-column-title">
            Education
          </h3>

          {education.map((item) => (
            <div className="education-card" key={item.title}>

              <div className="education-card-top">
                <span className="education-type">
                  {item.type}
                </span>

                <span className="education-period">
                  {item.period}
                </span>
              </div>

              <h3>{item.title}</h3>

              <p className="education-institution">
                {item.institution}
              </p>

              <p className="education-description">
                {item.description}
              </p>

            </div>
          ))}

        </div>


        {/* CERTIFICATIONS */}

        <div className="education-column">

          <h3 className="education-column-title">
            Certifications
          </h3>

          {certifications.map((certificate) => (
            <div
              className="certificate-card"
              key={certificate.title}
            >

              <div className="certificate-icon">
                ✓
              </div>

              <div className="certificate-info">

                <span className="education-type">
                  {certificate.type}
                </span>

                <h3>{certificate.title}</h3>

                <p>
                  {certificate.institution} · {certificate.year}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;