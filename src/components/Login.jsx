import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import "../styles/login.css";
import logo from "../assets/logo.png";

const Login = ({ setUsername }) => {
  const navigate = useNavigate();
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!usernameInput || !passwordInput) {
      Swal.fire({
        title: 'Error',
        text: 'Please enter your username and password.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    setUsername(usernameInput);
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleForgotPassword = () => {
    if (!usernameInput || !emailInput) {
      Swal.fire({
        title: 'Error',
        text: 'Please enter your username and email.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    const templateParams = { username: usernameInput, email: emailInput };

    emailjs.send('service_jpbc53j', 'template_jkqh34c', templateParams, '-KXCv_IQmFmYGhZAQ')
      .then(() => {
        Swal.fire({
          title: 'Email Sent',
          text: 'A link to reset your password has been sent.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        setModalOpen(false);
        setUsernameInput("");
        setEmailInput("");
      })
      .catch(() => {
        Swal.fire({
          title: 'Error',
          text: 'An error occurred while sending the email. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  return (
    <div className="loginContainer">
      <div className="loginBox">
        <img src={logo} alt="Logo" className="loginLogo" />
        <h1>Login</h1>
        <p>Add your credentials to login</p>
        <form onSubmit={handleLogin}>
          <div className="inputField">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              required
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
            />
          </div>
          <div className="inputField">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              required
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>
          <a href="#" className="forgotPassword" onClick={(e) => {
            e.preventDefault();
            setModalOpen(true);
          }}>
            Forgot password?
          </a>
          <button type="submit" className="loginButton">LOG IN</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="signupLink">Sign Up</Link>
        </p>
      </div>

      {modalOpen && (
        <div className="modalOverlay">
          <div className="modalContent">
            <h2>Reset Password</h2>
            <p>Please enter your email and username:</p>
            <div className="inputField">
              <label htmlFor="modalUsername">Username:</label>
              <input
                type="text"
                id="modalUsername"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
              />
            </div>
            <div className="inputField">
              <label htmlFor="modalEmail">Email:</label>
              <input
                type="email"
                id="modalEmail"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <button onClick={handleForgotPassword} className="resetButton2">Reset Password</button>
            <button onClick={() => setModalOpen(false)} className="closeButton">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
