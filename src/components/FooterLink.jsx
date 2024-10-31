import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const FooterLink = ({ to, label }) => {
  return (
    <li className="footerLink">
      <Link to={to} className="footerLink-text">
        {label}
      </Link>
    </li>
  );
};

export default FooterLink;
