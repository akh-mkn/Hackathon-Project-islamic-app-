import React from "react";
import "./Footer.css"; // Import the CSS file for styling

function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} Islamic Multi-Feature App | Designed by Matti
      </p>
    </footer>
  );
}

export default Footer;