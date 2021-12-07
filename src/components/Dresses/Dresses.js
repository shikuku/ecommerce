import React from "react";
import "./Dresses.css";
const Dresses=()=>{
    return(
    <div className="container">
        <h1>Dresses</h1>

        <div className="dresses">
        <div className="product-size">
            <div>
                <h3>Filter Products:Size</h3>
            </div>
            <div>
                <select className="select-size">
                    <option selected disabled>size</option>
                    <option value="1">s</option>
                    <option value="2">m</option>
                    <option value="3">l</option>
                    <option value="4">xl</option>
                </select>
            </div>

            <div className="color">
            <div>
                <h3>color</h3>
            </div>
                <select className="select-color">
                    <option selected disabled>color</option>
                    <option value="1">White</option>
                    <option value="2">Black</option>
                    <option value="3">Green</option>
                    <option value="4">Red</option>
                </select>
            </div>
        </div>
        <div className="price">
            <div>
            <h3>Sort Products:Price</h3>
            </div>
            <div>
            <select className="select-price">
                    <option selected disabled>Price</option>
                    <option value="1">Highest to Lowest</option>
                    <option value="2">Lowest to Highest</option>
                    
                </select>
            </div>
        </div>

        </div>
        </div>
    )
}
export default Dresses;