import React from "react";
import Nav from "../components/Nav/Nav";
import Announcements from "../components/Announcements/Announcents";
import Products from "../components/Products/Products";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import Dresses from "../components/Dresses/Dresses"
const ProductPage=()=>{
    return(
        <div>
<Nav/>
<Announcements/>
<Dresses />
<Products />
<Newsletter />
<Footer />

        </div>
    )
}
export default ProductPage;