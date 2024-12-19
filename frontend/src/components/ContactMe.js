import React, { useState } from "react";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://islamic-app-backend.onrender.com/contact", { //THE FETCH URL HAS BEEN UPDATED TO USE BACKEND DEPLOYED URL VIA RENDER. THIS WILL CAUSE ERROR WHEN RAN ON A LOCAL ENVIRONMENT, SO BE AWARE!
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResponseMessage(data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default ContactMe;