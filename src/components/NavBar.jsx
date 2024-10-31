  import React from "react"; 
  import { Link } from "react-router-dom";
  import CartWidget from "../components/CartWidget";
  import "../styles/navbar.css"; 
  import logo from "../assets/logo.png"; 
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
  import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons'; 

  const NavBar = ({ onLogout, username }) => { 
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
          <Link to="/favorites"> 
            <FontAwesomeIcon icon={faHeart} className="navbarIcon" />
          </Link>
          <Link to="/login">
            <FontAwesomeIcon icon={faUser} className="navbarIcon" />
          </Link>
          <CartWidget /> {}
          {username && ( 
            <button onClick={onLogout} className="logoutButton">Logout</button>
          )}
        </div>
      </nav>
    );  
  };

  export default NavBar;
