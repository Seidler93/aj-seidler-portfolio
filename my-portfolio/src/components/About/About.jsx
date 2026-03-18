import SectionHeader from "../SectionHeader/SectionHeader";
import "./About.css";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionHeader
          eyebrow="About"
          title="I like building software that solves messy real-world problems."
          description="My background in gym operations gave me a front-row seat to inefficient systems, manual workflows, and user pain points. Instead of just working around them, I started building tools to improve them."
        />

        <div className="about__grid">
          <div className="about__card">
            <h3>What I bring</h3>
            <p>
              I combine frontend development skills with product thinking. I care
              about UI, usability, maintainable structure, and building things
              that actually make someone’s job easier.
            </p>
          </div>

          <div className="about__card">
            <h3>Core strengths</h3>
            <p>
              React, Firebase, Firestore, JavaScript, component-based design,
              internal tools, workflow optimization, and building products from
              scratch around real operational needs.
            </p>
          </div>

          <div className="about__card">
            <h3>What I’m looking for</h3>
            <p>
              A frontend or full-stack role where I can contribute to real
              products, keep growing as an engineer, and work on software that
              values usability, speed, and thoughtful execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;