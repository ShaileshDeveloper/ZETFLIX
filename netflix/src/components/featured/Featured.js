import React from "react";
import image1 from "../../images/image1.png";
import "./featured.css";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Featured() {
  return (
    <div className="featured">
      <div className="featured_info_container">
        <span>This football documentory movie is all about<br/> the world class el-classico finals</span>
        <div className="featured_info_buttons">
            <button><PlayArrowIcon />Play</button>
            <button><InfoOutlinedIcon />Info</button>
        </div>
      </div>
      <div className="featured_image_container">
        <img src={image1} alt="featured" />
      </div>
    </div>
  );
}

export default Featured;
