import React ,{useState}from "react";
import "./movielistitem.css";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
function Movielistitems({imagesrc, imagehoversrc}) {

const [hovered , setHovered] = useState(false)

  return (
    <div className="movielistitem" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <img
       src ={hovered===false ? imagesrc : imagehoversrc}
       
        alt="movie"
      />
      <div className="listitem_icons_container">
      <PlayCircleFilledIcon className="icon_play" fontSize='large' color="primary"/>
      <ThumbUpIcon className="icon_liked" fontSize='large' color="action"/>
      </div>
    </div>
  );
}

export default Movielistitems;

// "
