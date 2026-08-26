function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="section-label">
        04 — CONTACT
      </div>

      <div className="contact-header">

        <div>
          <p className="contact-small">
            HAVE A PROJECT IN MIND?
          </p>

          <h2>
            Let's build
            <br />
            something <span>great.</span>
          </h2>
        </div>

        <p className="contact-description">
          Have a question, project idea, internship opportunity,
          or just want to say hello? Send me a message.
        </p>

      </div>


      <form
        className="contact-form"
        action="https://formspree.io/f/xzebpplv"
        method="POST"
      >

        <div className="form-row">

          <div className="form-group">
            <label htmlFor="name">
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </div>

        </div>


        <div className="form-group">

          <label htmlFor="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="7"
            placeholder="Tell me about your project..."
            required
          ></textarea>

        </div>


        <button
          type="submit"
          className="submit-button"
        >
          Send Message ↗
        </button>

      </form>

    </section>
  );
}

export default Contact;