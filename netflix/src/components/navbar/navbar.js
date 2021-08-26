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
            <li>Home</li>
            <li>series</li>
            <li>Popular</li>
            <li>Series</li>
            <li>Mylist</li>
          </div>
        </div>

        <div className="container_right">
          <div className="nav_options_bar_2">
            <li>
              <SearchIcon />
            </li>
            <li>KIDS</li>
            <li>
              <NotificationsActiveIcon />
            </li>
            <li>
              <img
                src="https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="profile"
              />
            </li>
              <div className="profile">
            <li>
              <ArrowDropDownCircleIcon className="icon"/>
              <div className="ArrowDropDown_options">
                <span>settings</span>
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
