import React, { useState, useEffect ,useContext} from "react";
import "./movielistitem.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { Link } from "react-router-dom";
import axios from "axios";

function Movielistitems({ item }) {

  const [movie, setMovie] = useState({});
  const [liked, setLiked] = useState(false);
  
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

  async function likeMovie() {
    const res = await axios.put(
      `https://Zetflix-football-app.shaileshweb.repl.co/api/movies/like/${item}`
    );
    setLiked(res.data.body.isLiked)
    
  }
  async function dislikeMovie() {
    const res = await axios.put(
      `https://Zetflix-football-app.shaileshweb.repl.co/api/movies/dislike/${item}`
    );
    setLiked(res.data.body.isLiked)
  }
  return (
    <div
      className="movielistitem"

    >
      <img src={movie.img} alt="movie" />
      <div className="listitem_icons_container">
        <Link to={{ pathname: "/watch", movie }}>
          <PlayCircleFilledIcon
            className="icon_play"
            fontSize="large"
            color="primary"
          />
        </Link>
        


        {(liked ) &&  <span onClick={dislikeMovie}>
              <ThumbUpIcon
                className="icon_liked"
                fontSize="large"
                style={{ color: "#FF4136" }}
              />{" "}
            </span>
            }

          { (!liked ) && (
            <span onClick={likeMovie}>
              <ThumbUpIcon
                className="icon_liked"
                fontSize="large"
                color="action"
              />
            </span>
          )}
        
      </div>
    </div>
  );
}

export default Movielistitems;


