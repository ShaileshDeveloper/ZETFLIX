import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {useLocation,Link} from 'react-router-dom'

import './watch.css'
function Watch() {
  const location = useLocation()
  const movie = location.movie
  console.log(movie)
  return (
    <div className="watch-container">
      <div className="back">
        <Link to='/'><ArrowBackIcon className='back_icon'style={{fontSize: '40px',color: 'white'}}/></Link>
      </div>
      <iframe title="my frame"src={movie.videoUrl} width="100%" height="750vh"></iframe>
    </div>
  );
}

export default Watch;
