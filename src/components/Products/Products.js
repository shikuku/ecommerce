import React from "react";
import "./Products.css";
import Productitem from "../Productitem/Productitem";
import {popularProducts} from "../../data";

const Products=()=>{
    return(
        <div className="products">
{
 popularProducts.map(item=>{
            return(
                <Productitem item={item}/>
                
            )
        })
    }
        </div>
    )

    
}
export default Products;
