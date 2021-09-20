import React from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="container_left">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"
              alt="logo"
            />
          </div>
          <div className="nav_options_bar_1">
           <NavLink to='/' className='link'> <li>Home</li></NavLink>
           <NavLink to='/series' className='link'><li>Series</li></NavLink>
           <NavLink to='/mylist' className='link'> <li>Mylist</li></NavLink>
          </div>
        </div>

        <div className="container_right">
          <div className="nav_options_bar_2">
            <li>
              <img
                src="https://pbs.twimg.com/profile_images/1425484606355042312/DahgfsJH_400x400.jpg"
                alt="profile"
              />
            </li>
              <div className="profile">
            <li>
              <ArrowDropDownCircleIcon className="icon"/>
              <div className="ArrowDropDown_options">
                <span>logout</span>
              </div>
            </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

// https://commons.wikimedia.org/wiki/File:Netflix_icon.svg
