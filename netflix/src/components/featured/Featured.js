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
        <img src="https://cdn.vox-cdn.com/thumbor/4jRoEfFCanIATpg2-KXs8RK7dG0=/0x0:1200x800/920x613/filters:focal(468x114:660x306):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69135616/Classico_marathon_getty_ringer.0.jpeg" alt="featured" />
      </div>
    </div>
  );
}

export default Featured;
