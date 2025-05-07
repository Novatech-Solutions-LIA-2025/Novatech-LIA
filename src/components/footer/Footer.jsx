"use client";

import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    url: "https://www.linkedin.com/company/novatech-solutions-ab/",
    icon: faLinkedin,
    label: "Besök oss på LinkedIn (öppnas i ny flik)",
  },
  {
    url: "https://www.facebook.com/NovaTechSolutonsAB",
    icon: faFacebook,
    label: "Besök oss på Facebook (öppnas i ny flik)",
  },
  {
    url: "https://www.instagram.com/novatechsolutionsab/",
    icon: faInstagram,
    label: "Besök oss på Instagram (öppnas i ny flik)",
  },
];

const contactInfo = [
  "123 Novatech Avenue, Innovation City",
  "info@novatech.com",
  "+1 (555) 123-4567",
  "Mon - Fri: 9:00 AM - 6:00 PM",
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({                      // Scroll-funktion till toppen av sidan, när man klickar på loggan 
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img
              src="images/Logo.svg"
              alt="Novatech logo"
              className="footer-logo"
              onClick={scrollToTop}
              loading="lazy"
            />
            <p className="follow-us">Följ oss</p>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <FontAwesomeIcon icon={link.icon} className="footer-icon" />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-info">
            <ul className="footer-list">
              {contactInfo.map((info, index) => (
                <li key={index} className="footer-info-item">
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="oval-gradient10"></div>
      </div>
      <p className="footer-bottom-text">
        © Copyright {new Date().getFullYear()} Novatech. Alla rättigheter
        förbehållna.
      </p>
    </footer>
  );
}

export default Footer;
