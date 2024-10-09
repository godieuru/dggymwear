import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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
