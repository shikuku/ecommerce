import React, {useState} from "react";
import "./Slider.css"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {slides} from "../../data"

const Slider=()=>{
    const [slideIndex,setSlideIndex]=useState(0);
    const hadleClick=(direction)=>{
       if(direction==="left"){
setSlideIndex(slideIndex>0?slideIndex-1:2)
       }
       else{
           setSlideIndex(slideIndex<2?slideIndex+1:0)
       }

    }
    return(
        <div className="wrapper">
            <div className="left-arrow" onClick={()=>hadleClick("left")}>
                <ArrowLeftOutlinedIcon />
            </div>
            {
                slides.map(slide=>{
                    return(
                    <div className="slide" style={{backgroundColor:slide.bg,transform:`translatex(${slideIndex*-100}vw)`}}>
                    <div className="slide-image">
                        <img src={slide.img} />
                    </div>
    <div className="slide-content">
        <h2>{slide.title}</h2>
        <p>{slide.desc}</p>
        <button className="btn">Buy Now</button>
    </div>
      </div>
                    )
                })
            }
  

           
            <div className="right-arrow" onClick={()=>hadleClick("right")}>
                <ArrowRightOutlinedIcon />
            </div>
        </div>
    )
}
export default Slider