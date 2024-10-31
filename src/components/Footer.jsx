import React from "react";
import "../styles/footer.css";
import FooterLink from "./FooterLink";
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
        <FooterLink to="/aboutus" label="About Us" />
        <FooterLink to="/contact" label="Contact" />
        <FooterLink to="/privacy" label="Privacy Policy" />
        <FooterLink to="/terms" label="Terms of Service" />
      </ul>

      <div className="footerIcons">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className="footerIcon" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} className="footerIcon" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="footerIcon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
