import React from "react";
import "./VideoGallery.css";
import {Link} from 'react-router-dom'

import SlackLogo from './SlackLogo.png';
import slackfeatures from './slackfeatures.webp';
import slackforteams from './Slackforteams.png';
import slackintegration from './slackintegration.png';
import advancedslacktips from './advancedslacktips.png';

const VideoGallery = () => {
  return (
    <div className="video-gallery">
      <h2>Videos</h2>
      <div className="video-grid">
        <div className="video-item">
          <a href="https://www.loom.com/share/7ef504311a4a4f53999cecfd1f2b7744?sid=c2799f66-6a3e-4412-9cf9-41d14467f818" target="_blank" rel="noopener noreferrer">
            <img src={SlackLogo} alt="Introduction to Slack" />
            <h3>Introduction to Slack</h3>
          </a>
        </div>

        {/* <div><iframe src="https://www.loom.com/embed/c5ecccf77ea342d7914f6620eab8ba07?sid=90d948ff-d215-4b9e-9e1e-9fddb21aeeea" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe></div> */}

        <div className="video-item">
          <a href="https://www.loom.com/share/7ef504311a4a4f53999cecfd1f2b7744?sid=c2799f66-6a3e-4412-9cf9-41d14467f818" target="_blank" rel="noopener noreferrer">
            <img src={slackfeatures} alt="Slack Core Features" />
            <h3>Slack Core Features</h3>
          </a>
        </div>
        <div className="video-item">
          <a href="https://www.loom.com/share/7ef504311a4a4f53999cecfd1f2b7744?sid=c2799f66-6a3e-4412-9cf9-41d14467f818" target="_blank" rel="noopener noreferrer">
            <img src={slackforteams} alt="Slack Integrations" />
            <h3>Slack Integrations</h3>
          </a>
        </div>
        <div className="video-item">
          <a href="https://www.loom.com/share/7ef504311a4a4f53999cecfd1f2b7744?sid=c2799f66-6a3e-4412-9cf9-41d14467f818" target="_blank" rel="noopener noreferrer">
            <img src={slackintegration} alt="Slack for Teams" />
            <h3>Slack for Teams</h3>
          </a>
        </div>
        <div className="video-item">
          <a href="https://www.loom.com/share/7ef504311a4a4f53999cecfd1f2b7744?sid=c2799f66-6a3e-4412-9cf9-41d14467f818" target="_blank" rel="noopener noreferrer">
            <img src={advancedslacktips} alt="Advanced Slack Tips" />
            <h3>Advanced Slack Tips</h3>
          </a>
        </div>
      </div>
      <Link to = "/" className = "back-home-button">Back Home</Link>
    </div>
  );
};

export default VideoGallery;