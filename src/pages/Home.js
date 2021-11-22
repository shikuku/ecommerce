import React from "react";
import Announcements from "../components/Announcements/Announcents.js";
import Nav from "../components/Nav/Nav.js";
import Slider from "../components/Slider/Slider";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products.js";




const Home=()=>{
    return(
        <div>
<Announcements/>
<Nav/>
<Slider />
<Categories />
<Products />
</div>



    )
}
export default Home;