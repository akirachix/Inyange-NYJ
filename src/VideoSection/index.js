import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import bornaCrime from './bornaCrime.png';

function VideoSection() {
  return (
    <div className="video-section">
      <h2>Videos</h2>
      <div className="content">
        <div className="video-preview">
          <img src={bornaCrime} alt="Video preview" />
          <Link to="/videos" className="view-all">View Videos</Link>
        </div>
        <div className="description">
          <p>
            In this section, We will be talking about Slack and its different Functionalities.
            It was created by Stewart Butterfield and Cal Henderson, co-founders of
            Flickr. They recognized the need for a more efficient communication
            tool within teams compared to traditional email. Slack aimed to
            streamline communication and project management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;