import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";
import logo from "../assets/logo.png";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Success!",
      text: "Registration successful. You will be redirected to the login page.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="signupContainer">
      <img src={logo} alt="Logo" className="signupLogo" />
      <h1>Create an Account</h1>
      <form onSubmit={handleSignUp}>
        <div className="inputField">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="inputField">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="inputField">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="signupSubmitButton">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
