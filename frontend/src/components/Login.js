import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://islamic-app-backend.onrender.com/login", { //THE FETCH URL HAS BEEN UPDATED TO USE BACKEND DEPLOYED URL VIA RENDER. THIS WILL CAUSE ERROR WHEN RAN ON A LOCAL ENVIRONMENT, SO BE AWARE! 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        setMessage("Login successful!");
        // Redirect to the welcome page
        navigate("/");
        // automatically refreshes page so app can reflect state change!
        window.location.reload();
      } else {
        setMessage(data.message || "Invalid credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Server error, please try again.");
    }
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;

