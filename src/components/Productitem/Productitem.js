import React from "react";
import "./Productitem.css";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Productitem=({item})=>{
    return(
        
<div className="products-items">
    <div className="products-image">
        <img src={item.img} alt=""/>
        <div className="empty-container"></div>

    </div>
<div className="product-icons">
    <div className="icons"><AddShoppingCartOutlinedIcon /></div>
    <div className="icons"><SearchOutlinedIcon /></div>
    <div className="icons"><FavoriteBorderOutlinedIcon /></div>
</div>
    
</div>
        
    )
}
export default Productitem;