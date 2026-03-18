import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        type: "success",
        message: "Message sent successfully.",
      });

      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s connect."
          description="If you're hiring for a frontend or full-stack role, I’d love to talk."
        />

        <div className="contact__layout">
          <div className="contact__info">
            <p className="contact__intro">
              I enjoy building products that solve real problems and improve the
              experience for the people using them. If you think I’d be a good
              fit for your team, send me a message.
            </p>

            <div className="contact__infoCard">
              <span>Email</span>
              <a href="mailto:ajseidler0526@gmail.com">ajseidler0526@gmail.com</a>
            </div>

            <div className="contact__infoCard">
              <span>Profiles</span>
              <div className="contact__links">
                <a
                  href="https://github.com/Seidler93"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/a-j-seidler-a50556b2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="from_name">Name</label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                placeholder="Your name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="from_email">Email</label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                placeholder="you@example.com"
                value={formData.from_email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What’s this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me a little about the role, project, or reason you're reaching out."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__bottom">
              <button className="btn btn--primary" type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {status.message && (
                <p className={`contact__status contact__status--${status.type}`}>
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;