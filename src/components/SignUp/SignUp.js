import React, { useState } from "react";

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Announcements from "../Announcements/Announcents";
import Nav from "../Nav/Nav";
import "./SignUp.css";
import Footer from "../Footer/Footer";

const SignUp = () => {
    const [passward,setPassword]=useState("");
    const [ConfirmPassWord,setConfirmPassWord]=useState("");
function onChangePassWord(e){
    const passWordValue=e.target.value;
    setPassword(passWordValue);
}

function onConfirmPassWord(e){
    const ConfirmPassWordValue=e.target.value;
    setConfirmPassWord(ConfirmPassWordValue);
}
const renderIcon=()=>{
  if(ConfirmPassWord!==""){
    return passward===ConfirmPassWord?<CheckIcon style={{fontSize:"2rem"}}/>:<ClearIcon style={{fontSize:"2rem"}}/>

  }
}
  return (
<div className="sign_up">


    <div className="signup-page">
<div className="form-content">
    <div className="form_left">
      <form>
        <div className="form-holder">
            <div className="signup-name ">
          <div className="my-inputs">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="my-inputs">
            <input type="text" placeholder="Last Name" />
          </div>
          </div>
          <div className="my-inputs">
            <input type="text" placeholder="Email" />
          </div>
<div className="passward-holder signup-name">
          <div className="my-inputs">
            <input onChange={(e)=>onChangePassWord(e)} type="password" placeholder="password" />
                    </div>
          <div className="my-inputs">
            <div className="input_check">
            <input onChange={(e)=>onConfirmPassWord(e)} type="password" placeholder="Confirm Your Passward" />
          <div>
{renderIcon()}
</div>
</div>
</div>
</div>
          <div className="my-inputs">
            <button className="signup-button">SIGN UP</button>
          </div>
        </div>
        <div className="have-account">
          <p>
            Already have an account? <a href="#">LOG IN HERE</a>
          </p>
        </div>
      </form>
      </div>
<div className="accounts_right">
<h1>SIGN UP WITH FACEBOOK  OR GOOGLE</h1>
<div className=" position">
   < FacebookIcon  className="icon"/>
    <button className="signup-button">Continue with Facebook </button>
</div>
<div className="google position">
    <GoogleIcon className="facebook-account icon"/>
<button className="signup-button">Continue with Google</button>
</div>
</div>
</div>
    </div>
    
    </div>
  );
};
export default SignUp;