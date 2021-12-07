import React from "react";
import Nav from "../components/Nav/Nav";
import Announcements from "../components/Announcements/Announcents";
import SinglePage from "../components/SingePage/SinglePage";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const SingleProduct=()=>{
    return(
        <div>
            <Nav/>
<Announcements/>
<SinglePage />
<Newsletter />
<Footer />
        </div>
    )
}
export default SingleProduct;