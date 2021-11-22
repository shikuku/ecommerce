import React from "react";
import "./Categoriesitem.css";

const Categoriesitem=({item})=>{
    return(
        
<div className="category-products">
    <div className="category-image">
        <img src={item.img}/>
    </div>
    <div className="category-info">
        <h1>{item.title}</h1>
    
        <button className="btn">shop now</button>
    </div>
</div>
        
    )
}
export default Categoriesitem;