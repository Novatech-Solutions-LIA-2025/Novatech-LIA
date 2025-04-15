"use client";

import { useState, useEffect } from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Nav() {
  const [isMenuOpen, setIsMenyOpen] = useState(false);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      // När menyn öppnas - stäng av scroll
      document.body.style.overflow = 'hidden';
    } else {
      // När menyn stängs - återaktivera scroll
      document.body.style.overflow = '';
    }
    setIsMenyOpen(!isMenuOpen);
  };

  // Rensa upp vid unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleLogoClick = () => {
    if (isMenuOpen) {
      // Stäng menyn om den är öppen
      setIsMenyOpen(false);
      document.body.style.overflow = '';
    }
    // Scrolla alltid till toppen
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenyOpen(false);
    document.body.style.overflow = ''; // Återaktivera scroll när man klickar på länk
  };

  

  return (
    <div>
      <nav className="navbar">
        <img 
          src="images/Logo.svg" 
          alt="Novatech logo" 
          className="nav-logo" 
          onClick={handleLogoClick}
        />
        <img
          src={isMenuOpen ? "images/xmark-solid.svg" : "images/bars-solid.svg"}
          alt={isMenuOpen ? "Stäng meny" : "Öppna meny"}
          className={`hamburger ${isMenuOpen ? "xmark" : ""}`}
          onClick={toggleMenu}
        />
        <ul className={`nav-list ${isMenuOpen ? "mobile-menu-open" : ""}`}>
          <li onClick={() => scrollToSection("#colleagues")}>Kollegor</li>
          <li onClick={() => scrollToSection("#services")}>Tjänster</li>
          <li onClick={() => scrollToSection("#insite")}>Insikt</li>
          <li onClick={() => scrollToSection("#input-field")}>Kontakt</li>
          <li className="mobile-menu-border" >
            <a href="#blog" rel="noopener noreferrer">Blogg</a>
          </li>

          <div className="mobile-social">
            <a
              href="https://www.linkedin.com/company/novatech-solutions-ab/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mobile-social-icon" />
            </a>
            <a
              href="https://www.facebook.com/NovaTechSolutonsAB"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} className="mobile-social-icon" />
            </a>
            <a
              href="https://www.instagram.com/novatechsolutionsab/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="mobile-social-icon" />
            </a>
          </div>
        </ul>

        {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
      </nav>
    </div>
  );
}

export default Nav;