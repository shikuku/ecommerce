import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";

import "./Nav.css"
 const Nav=()=>{
     return(
         <div className="Nav-wrapper">
             <div className="left">
                       
                      <span className="Lag">EN</span>

             <div className="search-container">
                 <input type="text" className="search" placeholder="SEARCH PRODUCT"/>
                <div className="search_icon"> <SearchOutlinedIcon /></div>
                 </div>
                 </div>
             <div className="center">
                 <Link to="/Home"><h1>MAGOSO ENTERPRISE.</h1></Link>
                 </div>
             <div className="right">
                 <ul>
                     <li><Link to="/logIn">LOGIN</Link></li>
                     <li><Link to="/sign-up">REGISTER</Link></li>
                     
                  <Link to="/cart"> <li> <Badge badgeContent={4} color="secondary">
        <LocalMallOutlinedIcon color="action" />
      </Badge>
      </li></Link>
                 </ul>
             </div>
         </div>
     )
 }
 export default Nav;