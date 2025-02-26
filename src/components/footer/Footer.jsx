import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <h1>Logo</h1>
        <ol className="footer-list">
          <li>
            <p>123 Novatech Avenue, Innovation City, Techland</p>
          </li>
          <li>
            <p>info@novatech.com</p>
          </li>
          <li>
            <p>+1 (555) 123-4567</p>
          </li>
          <li>
            {" "}
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          </li>
        </ol>
      </footer>
    </div>
  );
}

export default Footer;
