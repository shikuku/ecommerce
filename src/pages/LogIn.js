import React from "react";
import Nav from "../components/Nav/Nav";
import Announcements from "../components/Announcements/Announcents";
import Footer from "../components/Footer/Footer";
import LoginPage from "../components/LoginPage/LoginPage";

 
const LogIn=()=>{
    return(
        <div>
            <Nav />
            <Announcements />
            <LoginPage />
            <Footer />
        </div>
    )
}
export default LogIn;