import React from "react";
import "./Categories.css";
import Categoriesitem from "../Categoriesitem/Categoriesitem";
import {categories} from "../../data";
const Categories=()=>{
    return(
        <div className="category-content">
{
 categories.map(item=>{
            return(
                <Categoriesitem item={item}/>
                
            )
        })
    }
        </div>
    )
}
export default Categories;