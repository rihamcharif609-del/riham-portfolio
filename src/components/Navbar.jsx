function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <a href="#" className="logo">
          Riham.
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's talk
        </a>
      </nav>
    </header>
  );
}

export default Navbar;