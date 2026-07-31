import React from 'react'
import "./Header.css";
import logo from "../../assets/images/Netflix_Logo.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function Header() {
  return (
    <div className='header-outer-container'>
    <div className='header-container'>
      <div className='header-left'>
    <ul>
     <li><img src={logo} alt="Netflix Logo" width={100} /></li>
    <li>home</li>
    <li>TvShows</li>
    <li>Movies</li>
    <li>Latest</li>
    <li>MyList</li>
    <li>Browse by Langiages</li>
    </ul>
      </div>
      <div className='header-right'>
        <ul>
            <li><SearchIcon/></li>
             <li>< NotificationsNoneIcon/></li>
             <li><AccountBoxIcon/></li>
              <li><  ArrowDropDownIcon/></li>
        </ul>
      </div>
    </div>
      </div>
  )
}
