import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Badge from '@mui/material/Badge';

import "./Nav.css"
 const Nav=()=>{
     return(
         <div className="Nav-wrapper">
             <div className="left">
             <span className="Lag">EN</span>
             <div className="search-container">
                 <input type="text" className="search" placeholder="SEARCH PRODUCT"/>
                 <SearchOutlinedIcon />
                 </div>
                 </div>
             <div className="center">
                 <h1>MAGOSO ENTERPRISE.</h1>
                 </div>
             <div className="right">
                 <ul>
                     <li><a href="#">LOGIN</a></li>
                     <li><a href="#">REGISTER</a></li>
                     
                   <li>  <Badge badgeContent={4} color="secondary">
        <LocalMallOutlinedIcon color="action" />
      </Badge>
      </li>
                 </ul>
             </div>
         </div>
     )
 }
 export default Nav