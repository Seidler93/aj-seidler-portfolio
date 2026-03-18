import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero__content">
        <p className="hero__eyebrow">Frontend / Full-Stack Developer</p>

        <h1 className="hero__title">
          I build clean, real-world products with React and Firebase.
        </h1>

        <p className="hero__description">
          I’m transitioning from gym operations into software development after building real
           applications that solve real business problems, such as internal management systems, 
           desktop tools, and event platforms.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn--secondary">
            Contact Me
          </a>
        </div>

        <div className="hero__highlights">
          <div className="hero__highlight">
            <span>Strongest In</span>
            <strong>React + Firebase</strong>
          </div>
          <div className="hero__highlight">
            <span>Focus</span>
            <strong>Usable, product-driven apps</strong>
          </div>
          <div className="hero__highlight">
            <span>Experience</span>
            <strong>Real business workflows</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;