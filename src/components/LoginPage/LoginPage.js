import React, {useState} from "react";
import "./LoginPage.css";
import VisibilityOutlinedIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginPage=()=>{
    const [values, setValues]=useState({
        password:"",
        showPassword:false
    });
    const togglePassWordVisibility=()=>{
        setValues({showPassword:!values.showPassword})
    };
    
    return(
        <div className="login-page">
        <div className="login-left">
            <div>
                <h1>Magoso Enterprises</h1>
            </div>
            <a href="#" className="log-in"><button className="btn-login"><h2>LOGIN</h2></button></a>
            <div className="email-heading"><p>E-mail</p></div>

            <div className="log-div"><input type="text" placeholder="" className="email-input" /></div>
            <div className="log-div"><input type={values.showPassword? "text":"password"}  placeholder="Password" className="password-input" />
            <div  className="icon-eye" onClick={togglePassWordVisibility}>
  {values.showPassword?  < VisibilityOutlinedIcon />:< VisibilityOffIcon  />}
   </div>
   </div>
            <div className="log-div"><button className="login-input">Login</button></div>
<div className="log-checkbox">
    <div className="checkbox-div">
    <div className="checkbox-div">
        <input type="checkbox" className="checkbox-field" />
</div>
<div>
<p>Remember me</p>
</div>
</div>
<div className="recovery-password">
    <a href="#">Forgot your Password?</a>
</div>
</div>
<div className="account-content">
    <div><p>New to Magoso Enterprises?</p></div>
<div className="account-btn"><button className="btn-btn">Create Account</button></div>
</div>
<div className="copy-right"><p>Magoso Enterprises &copy; 2021</p></div>
        </div>


        <div className="login-right">
            <div><h2>WELCOME TO</h2></div>
            <div  className="description"><p>Magoso Enterprises.</p></div>
        <div  className="description-p"><p>The home of Reliable Shopping</p></div>
        </div>
        </div>
    )
}
export default LoginPage;
