import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import myPhoto from "../assets/images/WhatsApp Image 2025-12-14 at 4.21.36 PM.jpeg";

function Main() {
  return (
    <div className="container">

      <div className="about-section">
         <div className="image-wrapper">
      <img src={myPhoto} alt="Avatar" />
    </div>

        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/abithraR"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/abithra-ramesh-bb6b68291/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>

          <h1>Abithra</h1>
          <p>Computer Science & Engineering Student</p>

          {/* Short Description */}
          <p className="description">
            A motivated Computer Science Engineering student with hands-on
            experience in web development and problem-solving. Passionate about
            building scalable applications and continuously learning modern
            technologies.
          </p>

          <div className="mobile_social_icons">
            <a
              href="https://abithraR"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/abithra-ramesh-bb6b68291/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
