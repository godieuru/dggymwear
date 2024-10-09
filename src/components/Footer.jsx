// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css"; // Asegúrate de crear este archivo CSS
import logo from "../assets/logo.png"; // Asegúrate de que el logo esté disponible

// Importación de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Asegúrate de tener estos íconos instalados

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footerMenu">
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/terms">Terms of Service</Link>
        </li>
      </ul>

      <div className="footerIcons">
        <FontAwesomeIcon icon={faFacebook} className="footerIcon" />
        <FontAwesomeIcon icon={faTwitter} className="footerIcon" />
        <FontAwesomeIcon icon={faInstagram} className="footerIcon" />
      </div>
    </footer>
  );
};

export default Footer;
