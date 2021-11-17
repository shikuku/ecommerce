import React from "react";
import "./Slider.css"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {slides} from "../../data"
const Slider=()=>{
    const hadleClick=()=>{
        alert("muasa")
    }
    return(
        <div className="wrapper">
            <div className="left-arrow" onClick={hadleClick}>
                <ArrowLeftOutlinedIcon />
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src="/images/woman2.jpg" />
                </div>
<div className="slide-content">
    <h2>HOLIDAY OFFERS</h2>
    <p>Grab our December latest offers</p>
    <button className="btn">Buy Now</button>
</div>

            </div>

           
            <div className="right-arrow" onClick={hadleClick}>
                <ArrowRightOutlinedIcon />
            </div>
        </div>
    )
}
export default Slider