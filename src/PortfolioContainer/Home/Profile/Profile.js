import React from "react";
import Typical from "react-typical";
import "./Profile.css";

const Profile = () => {
  const onContactClick = () => {
    let screenComponent = document.getElementById("Contact Me");
    if (!screenComponent) return;
    screenComponent.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/zineb-taghia-515636221/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/ZinebTAGHIA">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCRbJp1UJ-4IVQ1i2rbDJwHQ">
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Zineb</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Computer Engineering Student📚💻",
                    1000,
                    "Full Stack Dev😎",
                    1000,
                    "MERN Stack Dev💻",
                    1000,
                    "React/React Native Dev📱",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Welcome to my Portfolio Website! I'm sharing with you my passion for IT and software development 
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={onContactClick}>
              {" "}
              Contact Me
            </button>
            <a href="resume.pdf" download="CV_Zineb_TAGHIA_ENG.pdf">
              <button className="btn highlighted-btn">Get My Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
