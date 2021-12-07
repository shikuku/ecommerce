import React from "react";
import Nav from "../components/Nav/Nav";
import Cart from "../components/Cart/Cart"
import Footer from "../components/Footer/Footer";
import Announcements  from "../components/Announcements/Announcents";
const Carts=()=>{
    return(
        <div>
            <Announcements />
            <Nav />
            <Cart />
            <Footer />
        </div>
    )
}
export default Carts;