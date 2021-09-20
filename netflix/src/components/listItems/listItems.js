import React, { useState, useEffect ,useContext} from "react";
import "./listItems.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { Link } from "react-router-dom";
import axios from "axios";
import {PlayListContext} from "../../context/playlistContext/playlistContext"


function ListItems({ item }) {

  const [movie, setMovie] = useState({});
  
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