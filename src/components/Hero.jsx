function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <p className="hero-label">
          FULL-STACK DEVELOPER
        </p>

        <h1>
          I build things
          <br />
          for the <span>web.</span>
        </h1>

        <p className="hero-description">
          I'm Riham, a Full-Stack Developer who loves building
          modern web applications and turning ideas into real
          digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button primary">
            View my work
          </a>

          <a href="#contact" className="button secondary">
            Contact me
          </a>

          <a href="/Riham-Charif-CV.pdf" download="Riham-Charif-CV.pdf"
             className="button cv-button">
             Download CV ↓
          </a>
        </div>

      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <span>↓</span>
      </div>
    </section>
  );
}

export default Hero;