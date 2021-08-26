import React ,{useState}from "react";
import "./movielistitem.css";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {NavLink} from 'react-router-dom'
function Movielistitems({imagesrc, imagehoversrc}) {

const [hovered , setHovered] = useState(false)

  return (
    <div className="movielistitem" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <img
       src ={hovered===false ? imagesrc : imagehoversrc}
       
        alt="movie"
      />
      <div className="listitem_icons_container">
      <NavLink to='/watch'>
      <PlayCircleFilledIcon className="icon_play" fontSize='large' color="primary"/>
      </NavLink>
      <ThumbUpIcon className="icon_liked" fontSize='large' color="action"/>
      </div>
    </div>
  );
}

export default Movielistitems;

// "
