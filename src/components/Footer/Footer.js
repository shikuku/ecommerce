import React from "react";
import "./Footer.css";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer=()=>{
    
    return(
        <div>
        <div className="footer">
            <div className="footer-top">
        <div className="left-content">
            <h2>Magoso Enterprises.</h2>
            <p>Buy the best from the best.We bring you quality products and remarkable customers experiences. We value you</p>
            <div className="left-icons"> 
          <div className="facebook-icon"> <a href="#"><FacebookOutlinedIcon/></a></div>
<div className="instagram-icon"><a href="#"><InstagramIcon /></a></div>
<div className="pinterest-icon"><a href="#"><PinterestIcon /></a></div>
<div className="twitter-icon"><a href="#"><TwitterIcon /></a></div>
</div>

 </div>
<div className="useful-links">
    <h3>Useful Links</h3>
    <p>Home</p>
    <p>Man Fashion</p>
    <p>Accessories</p>
    <p>Oder Tracking</p>
    <p>Wishlist</p>
</div>

<div className="cart-content">
    <p>Cart</p>
    <p>Women Fashion</p>
    <p>Accessories</p>
    <p>My Account</p>
    <p>Terms</p>
</div>
<div className="contact-content">
    <h3>Contact</h3>
    <div className="footer-icons">
        <div className="icones"><LocationOnIcon /></div>
    <p>Great Street, Lavington, Nairobi.ke</p>

    </div>
    <div className="footer-icons">
       <div className="icones"><CallOutlinedIcon /></div>
       <p>+254 456 789</p>
    </div>
    <div className="footer-icons">
        <div className="icones"><EmailOutlinedIcon /></div>
        <p>order@magoso.com</p>
    </div>
    <div className="payment-icons">
    <div className="payment"><img src="images/visa.svg"/></div>
    <div className="payment"><img src="images/master-card.svg"/></div>
    <div className="payment"><img src="images/mpesa.svg"/></div>
    </div>
</div>
</div>
<div></div>
        </div>


        <a className="bottom-content">Magoso Interprises &copy; 2021-All Rights reserved</a>
        </div>
    )
    
}
export default Footer;