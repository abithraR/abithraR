import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education</h1>

        <VerticalTimeline>
          {/* College */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2022 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              B.E. Computer Science and Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Jai Shriram Engineering College
            </h4>
            <p>
              Pursuing undergraduate studies with focus on Data Structures,
              Algorithms, Database Management Systems, and Web Development.
            </p>
          </VerticalTimelineElement>

          {/* 12th */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 - 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Higher Secondary Education (12th)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Your School Name
            </h4>
            <p>
              Completed higher secondary education with a strong foundation in
              Mathematics, Physics, and Computer Science.
            </p>
          </VerticalTimelineElement>

          {/* 10th */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Secondary School Education (10th)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Your School Name
            </h4>
            <p>
              Built a strong academic base with emphasis on Mathematics and
              Science fundamentals.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
