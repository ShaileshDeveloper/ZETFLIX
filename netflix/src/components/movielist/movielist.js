import React, { useRef, useState } from "react";
import Movielistitems from "../movielistItems/Movielistitems";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import "./movielist.css";

function Movielist() {
  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);

  function handleClick(direction) {
    let distance = listRef.current.getBoundingClientRect().x;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log(distance);
  }

  return (
    <div className="movielist">
      <span>Continue watching for shaileshh</span>
      <div className="movielist_items">
        <ArrowBackIosOutlinedIcon
          className="movielist_left_arrow"
          onClick={() => handleClick("left")}
        />
        <div className="movielist_items_container" ref={listRef}>
          <Movielistitems />
          <Movielistitems />
          <Movielistitems />
          <Movielistitems />
          <Movielistitems />
          <Movielistitems />
          <Movielistitems />
          <Movielistitems />
          <Movielistitems />
          <Movielistitems />
          <Movielistitems />
        </div>
        <ArrowForwardIosOutlinedIcon
          className="movielist_right_arrow"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default Movielist;
