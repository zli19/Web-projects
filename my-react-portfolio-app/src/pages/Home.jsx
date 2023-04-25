import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Zhikun</h2>
        <div className="prompt">
          <p>
            A student in the Business Information Technology program at RRC
            Polytech, with a passion for learning and coding.
          </p>
          <GitHubIcon />
          <EmailIcon />
          <PhoneIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML, CSS, ReactJS, JQuery, Vite, WinForms</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>.NET Framework, ADO.NET, JDBC, PostgreSQL, Sqlite</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              Object Oriented Programming, Javascript, C#, Java, Python
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
