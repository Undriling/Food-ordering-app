// Named Import
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");

    // const [bgColor, setBgColor] = useState("#f0f0f0");

//   const changeColor = () => {
//     const Color = "#blue";
//     setBgColor(Color); }

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL} />
                <h2 style={{color:"red", marginTop:"25px", marginLeft:"5px"}}>FooD!e</h2>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>🛒</li>
                    <div className="login">
                        <button className="loginBtn"  onClick={() =>
                            loginBtn == "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
                        } >{loginBtn}</button>
                    </div>
                    
                </ul>
            </div>

        </div>
    );
};

export default Header;