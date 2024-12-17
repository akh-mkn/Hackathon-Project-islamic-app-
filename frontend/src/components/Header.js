import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"; 

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");

    // Redirect to the login page
    navigate("/login");

    //forces a re-render to allow app to reflect state change, no manual refresh!
    window.location.reload();
  };

  

  return (
  <header>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/app-info">App Info</Link></li>
            <li><Link to="/contact-me">Contact Me</Link></li>
        </ul>
    </nav>
    {/* Logout Button */}
    <button onClick={handleLogout}>Logout</button>
</header>
  );
}

export default Header;