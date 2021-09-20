import React from "react";
import image1 from "../../images/image1.png";
import "./featured.css";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {Link} from "react-router-dom"
import {movie} from '../../featuredMovieData'

function Featured({type}) {
  return (
    <>
    {type==="series" ? <div className="featured">
      <div className="featured_info_container">
       <div className='title_type'>{type==="series"?"Series":"Movies"}</div>
        <span>This football  series is all about<br/> the world players</span>
        <div className="featured_info_buttons">
           <Link style={{textDecoration:'none'}}to={{ pathname:'/watch', movie}}> <button><PlayArrowIcon /><span>Play</span></button></Link>
            <button><InfoOutlinedIcon /><span>Info</span></button>
        </div>
      </div>
      <div className="featured_image_container">
        <img src="https://media.gettyimages.com/photos/barcelonas-argentinian-forward-lionel-messi-argues-with-real-madrids-picture-id1128420959?k=20&m=1128420959&s=612x612&w=0&h=el0hQ6VZLLGiDBLG__mw0aImTGQtpkxOCSIqLRhnukY=" alt="featured" />
      </div>
    </div> : <div className="featured">
      <div className="featured_info_container">
       <div className='title_type'>{type==="series"?"Series":"Movies"}</div>
        <span>This football documentory movie is all about<br/> the world class el-classico finals</span>
        <div className="featured_info_buttons">
           <Link style={{textDecoration:'none'}}to={{ pathname:'/watch', movie}}> <button><PlayArrowIcon /><span>Play</span></button></Link>
            <button><InfoOutlinedIcon /><span>Info</span></button>
        </div>
      </div>
      <div className="featured_image_container">
        <img src="https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-looks-on-during-the-la-liga-match-real-picture-id1133424656?k=20&m=1133424656&s=612x612&w=0&h=pyTY0JKUH5U57lbla1zcd8Gv9OQPEVAsdBLp0Yb5Hdg=" alt="featured" />
      </div>
    </div>}
    </>
  );
}

export default Featured;
