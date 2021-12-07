import React from "react";
import "./Newsletter.css";
import SendIcon from '@mui/icons-material/Send';
const Newsletter=()=>{
    return(
        <div className="top-content">
            <div>
            <h2>Newsletter</h2>
            </div>
            <div>
            <p>sign up for our newsletter to be notified on new promotions and sales</p>
            </div>

            <div className="input-content">
                <div>
        <input type="text" className="input" placeholder="Enter your email address"/>
        </div>
       <div className="iput-icon">
        <SendIcon />
        </div>
        </div>
        
        </div>
        
    )
}






export default Newsletter;