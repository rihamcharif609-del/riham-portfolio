import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "DeliverX",
    type: "FULL-STACK APPLICATION",

    image: "/deliverX.png",

    description:
      "A delivery platform that connects senders with couriers. Users can create delivery requests, track packages, and manage deliveries.",

    technologies: [
      "React",
      "Laravel",
      "MySQL",
      "Sanctum",
    ],

    github: "https://github.com/rihamcharif609-del/deliverX",

    demo: "#",
  },

  {
    title: "Project Two",
    type: "WEB APPLICATION",

    image: "#",

    description:
      "A modern web application built to solve a real-world problem.",

    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],

    github: "#",

    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="section-label">
        03 — SELECTED WORK
      </div>

      <div className="projects-header">

        <h2>
          Things I've
          <br />
          <span>built.</span>
        </h2>

        <p>
          A selection of projects I've worked on while
          learning, experimenting and building real
          applications.
        </p>

      </div>

      <div className="projects-list">

        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            number={`0${index + 1}`}
          />
        ))}

      </div>

    </section>
  );
}

export default Projects;