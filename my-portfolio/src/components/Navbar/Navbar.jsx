import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          AJ<span>.</span>
        </a>

        <nav className="navbar__nav">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact" className="navbar__cta">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;