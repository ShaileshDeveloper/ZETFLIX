import React from "react";
import Movielistitems from "../movielistItems/Movielistitems";
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined'


function Movielist() {
  return (
    <div className="movielist">
      <span>Continue watching for shailesh</span>
      <div className="movielist_items">
       <ArrowBackIosOutlinedIcon />
       <div className="movielist_items_container">
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
        <ArrowForwardIosOutlinedIcon />
      </div>
    </div>
  );
}

export default Movielist;
