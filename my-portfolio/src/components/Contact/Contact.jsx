import SectionHeader from "../SectionHeader/SectionHeader";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact__card">
          <SectionHeader
            eyebrow="Contact"
            title="Let’s connect."
            description="If you're hiring for a frontend or full-stack role, I’d love to talk. I’m especially interested in product-focused teams building software people actually use."
          />

          <div className="contact__actions">
            <a className="btn btn--primary" href="mailto:your@email.com">
              Email Me
            </a>
            <a
              className="btn btn--secondary"
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn--secondary"
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;