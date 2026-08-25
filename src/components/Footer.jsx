function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h3>Riham.</h3>

          <p>
            Full-Stack Developer & Creative.
          </p>
        </div>

        <div className="footer-links">

          <a
            href="https://github.com/rihamcharif609-del"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="#"
          >
            LinkedIn ↗
          </a>

          <a
            href="#"
          >
            Instagram ↗
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} Riham. All rights reserved.
        </span>

        <span>
          Built with React.
        </span>

      </div>

    </footer>
  );
}

export default Footer;