import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../components/CartWidget";
import "../styles/navbar.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <ul className="navbarMenu">
        <li>
          <Link to="/category/womens">WOMEN'S</Link>
        </li>
        <li>
          <Link to="/category/mens">MEN'S</Link>
        </li>
        <li>
          <Link to="/category/accessories">ACCESSORIES</Link>
        </li>
      </ul>

      <div className="navbarIcons">
        <FontAwesomeIcon icon={faSearch} className="navbarIcon" />
        <FontAwesomeIcon icon={faHeart} className="navbarIcon" />
        <FontAwesomeIcon icon={faUser} className="navbarIcon" />
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
