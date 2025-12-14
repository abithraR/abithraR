import React from "react";

import mock01 from "../assets/images/re-platforming-an-eCommerce-Website.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";

import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project">
  <img src={mock01} className="zoom" alt="Online Store E-commerce Website" width="100%" />
  <h2>Online Store – E-commerce Website</h2>
  <p>
    Designed and developed a fully responsive e-commerce web application featuring
    product listings, user-friendly navigation, and a clean UI using modern
    component-based architecture. The project focuses on performance,
    scalability, and seamless user experience.
  </p>
  <a
    href="https://github.com/abithraR/online-store-E-commerce-website"
    target="_blank"
    rel="noreferrer"
    className="project-link"
  >
    View on GitHub
  </a>
</div>


      </div>
    </div>
  );
}

export default Project;
