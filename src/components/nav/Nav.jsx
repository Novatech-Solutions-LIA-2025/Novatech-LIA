"use client";

import "./nav.css";

function Nav() {
  const scrollToColleagues = () => {
    const colleaguesSection = document.getElementById("#colleagues");
    if (colleaguesSection) {
      colleaguesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("#services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToInsite = () => {
    const insiteSection = document.getElementById("#insite");
    if (insiteSection) {
      insiteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToInputField = () => {
    const inputFieldSection = document.getElementById("#input-field");
    if (inputFieldSection) {
      inputFieldSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav className="navbar">
        <img src="images/Logo.svg" alt="Novatech logo" className="nav-logo" />
        <img
          src="images/bars-solid.svg"
          alt="menu-icon"
          className="hamburger"
        />
        <ul className="nav-list">
          <li onClick={scrollToColleagues}>Kollegor</li>
          <li onClick={scrollToServices}>Tjänster</li>
          <li onClick={scrollToInsite}>Insikt</li>
          <li onClick={scrollToInputField}>Kontakt</li>
          <a href="#blog" target="blank">
            <li>Blogg</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
