import React from "react";
import "../styles/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHubIcon />
      </div>
      <p>&copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
