import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import './watch.css'
function Watch() {
  return (
    <div className="watch-container">
      <div className="back">
        <ArrowBackIcon />
      </div>
      <iframe className = 'video'src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"></iframe>
    </div>
  );
}

export default Watch;
