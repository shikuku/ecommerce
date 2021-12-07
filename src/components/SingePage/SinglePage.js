import React, { useState } from "react";
import "./SinglePage.css";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const SinglePage=()=>{
    
    const [number, setNumber]=useState(1);
    const [color,setColor]=useState("black")
    
        const increase=()=>{
            if(number<5){
        setNumber((prevNum)=>prevNum+1);}
    }
    const decrease=()=>{
        if(number>1){
        setNumber((prevNum)=>prevNum-1);}
        
    }
    
    function handleColorOnHover(color){
        setColor(color);
    }

    return(
        <div className="product-page">
            <div className="image">
                <img src="./images/jacket.png" />
            </div>

            <div className="product-items">
<div>
    <h1>Jacket</h1>
    </div>
    <div>
    <p>high quality material jeans 
        jacket which can last
         for a long time</p>
    </div>
    <div className="cash-price">
        <p>Ksh. 2,500</p>
    </div>
    <div className="product-size">
    <div><p>Size</p></div>
                <select className="sizes">
                    <option selected disabled>size</option>
                    <option value="1">s</option>
                    <option value="2">m</option>
                    <option value="3">l</option>
                    <option value="4">xl</option>
                </select>
            </div>
            <div>
                <div>
                    <h3>Select Color:<span style={{color:color}}>{color}</span></h3>
                </div>
                <div className="color-btn">
                    <div>
                        <h3>Color</h3>
                    </div>
                    <div className="btn1">
                        <button className="btn btn-1" onMouseOver={()=>handleColorOnHover("Black")} onClick={()=>setColor("Black")}></button>
                    </div>
                    <div className="btn2">
                        <button className="btn btn-2" onMouseOver={()=>handleColorOnHover("Teal")} onClick={()=>setColor("Teal")}></button>
                    </div>
                    <div className="btn3">
                        <button className="btn btn-3" onMouseOver={()=>handleColorOnHover("purple")} onClick={()=>setColor("Purple")}></button>
                    </div>
                    <div className="btn4">
                        <button className="btn btn-4" onMouseOver={()=>handleColorOnHover("Blue")} onClick={()=>setColor("Blue")}></button>
                    </div>
                </div>
            </div>
            <div className="bottom-contents">
            <div className="icons">
            <div><button onClick={decrease}><RemoveOutlinedIcon /></button></div>
            <div className="quantity">{number}</div>
            <div><button onClick={increase}><AddOutlinedIcon /></button></div>
            </div>
            <div>
                <button className="btn-cart">Add to cart</button>
            </div>
            <div className="favorite-icon"><FavoriteBorderOutlinedIcon /></div>
            <div className="white-list"><p>Add to whitelist</p></div>

            </div>
            </div>
        </div>
    )
}
export default SinglePage;