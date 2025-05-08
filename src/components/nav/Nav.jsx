"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Nav() {
  const [isMenuOpen, setIsMenyOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const navbarRef = useRef(null);

  const isBlogPage = pathname.startsWith("/blog");

  // Hantera scrollriktning
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrollar nedåt
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrollar uppåt
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Hantera body-scroll baserat på meny-status
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = ""; // återställ scroll vid unmount
    };
  }, [isMenuOpen]);

  // Återställ meny och scroll när sökvägen ändras
  useEffect(() => {
    setIsMenyOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenyOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    setIsMenyOpen(false);
    document.body.style.overflow = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenyOpen(false);
  };

  return (
    <nav
      className={`navbar ${isVisible ? "visible" : "hidden"}`}
      ref={navbarRef}
    >
      {!isBlogPage && (
        <>
          <div className="oval-gradient"></div>
          <div className="oval-gradient2"></div>
          <div className="oval-gradient3"></div>
        </>
      )}
      <Link href="/">
        <img
          src="images/Logo.svg"
          alt="Novatech logo"
          className="nav-logo"
          onClick={handleLogoClick}
        />
      </Link>
      {!isBlogPage && (
        <img
          src={isMenuOpen ? "images/xmark-solid.svg" : "images/bars-solid.svg"}
          alt={isMenuOpen ? "Stäng meny" : "Öppna meny"}
          className={`hamburger ${isMenuOpen ? "xmark" : ""}`}
          onClick={toggleMenu}
        />
      )}
      <ul
        className={`nav-list ${isMenuOpen ? "mobile-menu-open" : ""} ${
          isBlogPage ? "blog-page" : ""
        }`}
      >
        {!isBlogPage && (
          <>
            <li onClick={() => scrollToSection("colleagues-scroll")}>
              Kollegor
            </li>
            <li onClick={() => scrollToSection("services-scroll")}>Tjänster</li>
            {/* <li onClick={() => scrollToSection("insite-scroll")}>Insikt</li> */}
            <li onClick={() => scrollToSection("input-field-scroll")}>
              Kontakt
            </li>
            <div className="mobile-menu-border">
              {/* <li>
                <Link href="/blog">Blogg</Link>
              </li> */}
            </div>
            <div className="mobile-social">
              <a
                href="https://www.linkedin.com/company/novatech-solutions-ab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="mobile-social-icon"
                />
              </a>
              <a
                href="https://www.facebook.com/NovaTechSolutonsAB"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="mobile-social-icon"
                />
              </a>
              <a
                href="https://www.instagram.com/novatechsolutionsab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="mobile-social-icon"
                />
              </a>
            </div>
          </>
        )}
      </ul>
      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </nav>
  );
}

export default Nav;
