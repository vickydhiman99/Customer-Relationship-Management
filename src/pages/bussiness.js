import React, { Component } from 'react'
import  "./../pages/bussiness.css";
import Logo from "../pages/image/logo1.png";
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import User from "../pages/image/USER.png";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from '@mui/material/IconButton';

export default class bussiness extends Component {
  render() {
    return (
      <div className='main'>

        <div className='header'>
        <div className='div1'>
        <img src={Logo}></img>
        </div>
        <div className='div2'>
        <h1>NilaDrisaya Media</h1>
        <h3>Identification of Transparency</h3>
        </div>
        </div>

        <div className='navbar'>
          <ul>
          
            <li><HomeIcon></HomeIcon></li>
            <li>Local</li>
            <li>About us</li>
            <li>Bulletin</li>
            <li>Education</li>
            <li>Business</li>
            <li>Entertainment</li>
            <li>Lifestyle</li>
            <li>Sports</li>
            <li>Gallery</li>
            <li>
              <Paper className='srch'
                    component="form"
                    style={{ display: "flex", marginLeft: "auto", width: "367px", height: "43px", marginTop: "6%", backgroundColor: "rgba(121, 0, 255, 0.08)", boxShadow: "none" }}
                >
                    <IconButton
                        type="button"
                        style={{ p: "150px" }}
                        aria-label="search"
                    >
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        style={{ ml: 5, flex: 1, fontSize: "15px" }}
                        placeholder="Search here"
                        inputProps={{ "aria-label": "Search here" }}
                    />
                </Paper>
                </li>
  
            <li><NotificationsNoneIcon></NotificationsNoneIcon></li>
            <li><img  className="img1" src={User}/></li>
          </ul>
        </div>
      </div>
    )
  }
}
 