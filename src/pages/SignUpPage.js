import React from "react";
import Nav from "../components/Nav/Nav";
import Announcements from "../components/Announcements/Announcents";
import Footer from "../components/Footer/Footer";
import SignUp from "../components/SignUp/SignUp";

 
const SingUpPage=()=>{
    return(
        <div>
            <Announcements />
            <Nav />
            
            <SignUp/>
            <Footer />
        </div>
    )
}
export default SingUpPage;