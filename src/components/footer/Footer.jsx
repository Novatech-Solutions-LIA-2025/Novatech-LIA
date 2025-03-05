import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
    <footer className="footer-container">
      <div className="footer-images">
        <img
          src="images/Logo.svg"
          alt="Novatech logo"
          className="footer-logo"
        />

        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/company/novatech-solutions-ab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
          </a>
          <a
            href="https://www.facebook.com/NovaTechSolutonsAB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
          </a>
          <a
            href="https://www.instagram.com/novatechsolutionsab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
          </a>
        </div>
      </div>
      <div className="footer-info">
        <li>123 Novatech Avenue, Innovation City</li>
        <li>info@novatech.com</li>
        <li>+1 (555) 123-4567</li>
        <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
      </div>
    </footer>
    <p className="bottom-text">© Copyright 2024 Novatech. Alla rättigheter förbehållna.</p>
    </>
    
  );
  
}

export default Footer;
