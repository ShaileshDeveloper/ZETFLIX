import React, { useState, useEffect ,useContext} from "react";
import "./listItems.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { Link } from "react-router-dom";
import axios from "axios";


function ListItems({ item }) {

  const [movie, setMovie] = useState({});
  const [hovered, setHovered] = useState(false);
  const [liked  , setLiked] = useState(false);
  console.log(liked ,"value")

 
 
  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(
          `https://Zetflix-football-app.shaileshweb.repl.co/api/movies/find/${item}`
        );
        setMovie(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  
  return (
    <div
      className="listitem"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={movie.img} alt="movie" />
      <div className="listitem_icons_container">
        <Link to={{ pathname: "/watch", movie }}>
          <PlayCircleFilledIcon
            className="icon_play"
            
            
          />
        </Link>
      </div>
    </div>
  );
}

export default ListItems;