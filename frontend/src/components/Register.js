import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.status === 201) {
        setMessage("User registered successfully!");
      } else {
        setMessage(data.message || "An error occurred during registration.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Server error, please try again.");
    }
  };

  return (
    <div>
      <h1>REGISTER</h1>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
      
      <p>
      Already have an account? <Link to="/login">Log In</Link>
          </p>
      
          {message && <p>{message}</p>}
        </div>
  );
}

export default Register;
