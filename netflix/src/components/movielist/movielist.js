import React, { useRef, useState } from "react";
import Movielistitems from "../movielistItems/Movielistitems";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import "./movielist.css";
import {link1,link2,link3,link4,link5,link6,link7,link8,link9,link10 , linkhover1,linkhover2,linkhover3,linkhover4,linkhover5,linkhover6,linkhover7,linkhover8,linkhover9,linkhover10} from '../../links/links'



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
          fontSize='large'
          onClick={() => handleClick("left")}
        />
        <div className="movielist_items_container" ref={listRef}>
          <Movielistitems imagesrc={link1} imagehoversrc={linkhover1}/>
          <Movielistitems imagesrc={link2} imagehoversrc={linkhover2}/>
          <Movielistitems imagesrc={link3} imagehoversrc={linkhover3}/>
          <Movielistitems imagesrc={link4} imagehoversrc={linkhover4}/>
          <Movielistitems imagesrc={link5} imagehoversrc={linkhover5}/>
          <Movielistitems imagesrc={link6} imagehoversrc={linkhover6}/>
          <Movielistitems imagesrc={link7} imagehoversrc={linkhover7}/>
          <Movielistitems imagesrc={link8} imagehoversrc={linkhover8}/>
          <Movielistitems imagesrc={link9} imagehoversrc={linkhover9}/>
          <Movielistitems imagesrc={link10} imagehoversrc={linkhover10}/>
          
        </div>
        <ArrowForwardIosOutlinedIcon
          className="movielist_right_arrow"
          fontSize='large'
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default Movielist;
