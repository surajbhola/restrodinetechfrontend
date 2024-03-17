import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonIcon from "@mui/icons-material/Person";

const TopNavBar = () => {
  return (
        <div className="topNavBar">
        <div className="navHeading">
          <h1>RestroDine Tech</h1>
        </div>
        <div className="navSearchBar">
          <SearchIcon className="searchIcon"></SearchIcon>
          <input type="search" placeholder="Search" />
        </div>
        <div className="navIcons">
          <NotificationsNoneIcon className="notificationIcon"></NotificationsNoneIcon>
          <PersonIcon className="personIcon"></PersonIcon>
        </div>
      </div>
  )
}

export default TopNavBar;
