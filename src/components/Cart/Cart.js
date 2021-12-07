import React, { useState } from "react";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import "./Cart.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { cart } from "../../data";

const Cart = () => {
  const [number, setNumber] = useState(1);

  const handleQuantity = (e, type) => {
let quantityBox = e.target.parentElement.parentElement.parentElement.children.item(2).children.item(0);

if (type === "add"){
    if (number >= 1) {
      setNumber((prevNum) => prevNum + 1);
      
    }
  }
else {
  if (number < 5) {
    setNumber((prevNum) => prevNum - 1);

  }
}

quantityBox.textContent = number;
  };

  return (
    <div className="cart_content">
      <div className="cart_left">
        <div className="cart">
          <div className="cart_img">
            <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
          </div>
          <div className="cart_products">
            <div className="guiter_vintage">
              <div>
                
                <p>Means Guitar Vintage Crusher</p>
              </div>
              <div className="vintage_icon">
                <div>
                  <ClearIcon />
                </div>
                <div className="quantity_value">
                  <p>1</p>
                </div>
                <p>Ksh 3,000</p>
              </div>
            </div>
            <div className="guiter_vintage  vintage">
              <div className="bottom_vintage">
                <div className="color_icon"></div>
                <div>
                  <button className="function_btn">
                    <RemoveOutlinedIcon />
                  </button>
                </div>
                <div className="digit_cart">
                  <p>1</p>
                </div>
                <div>
                  <button className="function_btn">
                    <AddOutlinedIcon />
                  </button>
                </div>
              </div>
              <div className="remove_icon">
                <div>
                  <DeleteOutlineIcon />
                </div>
                <div>
                  {" "}
                  <p>Remove item</p>
                </div>
              </div>
            </div>
          </div>
        </div>
<hr />
        <div className="cart">
          <div className="cart_img">
            <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
          </div>
          <div className="cart_products">
            <div className="guiter_vintage">
              <div>
                <p>Means Guitar Vintage Crusher</p>{" "}
              </div>
              <div className="vintage_icon">
                <div>
                  <ClearIcon />
                </div>
                <div>
                  <p>1</p>
                </div>
                <p>Ksh 3,000</p>
              </div>
            </div>
            <div className="guiter_vintage  vintage">
              <div className="bottom_vintage">
                <div className="color_icon color_icon1"></div>
                <div onClick={(e)=>handleQuantity(e, "remove")}>
                  <button className="function_btn" >
                    <RemoveOutlinedIcon />
                  </button>
                </div> 
                <div className="digit_cart">
                  <p>1</p>
                </div>
                <div onClick={(e)=>handleQuantity(e, "add")}>
                  <button className="function_btn">
                    <AddOutlinedIcon />
                  </button>
                </div>
              </div>
              <div className="remove_icon">
                <div>
                  <DeleteOutlineIcon />
                </div>
                <div>
                  <p>Remove item</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        <div className="button_btn">
          <button className="btn_btn">CONTINUE SHOPPING</button>
        </div>
      </div>

      <div className="cart_right">
        <div>
          <h3>Your Order</h3>
        </div>
        <div className="cart-order">
          <div className="order_content">
            <div>
              
              <p>Subtotals</p>
            </div>
            <div className="cart-price">
              <p>Ksh 4,000</p>
            </div>
          </div>
          <div className="order_content">
            <div>
              <p>Discounts</p>
            </div>
            <div className="order_p">
              <p>-</p>
            </div>
          </div>
          <div className="order_content">
            <div>
              <p>Shipping</p>
            </div>
            <div className="order_p">
              <p>-</p>
            </div>
          </div>
          <div className="border_cart">
          <hr />
          </div>
          <div className="order_content">
            <div>
              <p>Totals</p>
            </div>
            <div className="cart-price">
              {" "}
              <p>Ksh 4,000</p>
            </div>
          </div>
        </div>
        <div className="cart_btn_btn">
          <button className="cart_btn">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
