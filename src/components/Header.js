// Named Import
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login ⛄");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/"><img className="logo" src= {LOGO_URL} /> </Link>
                <h2 style={{color:"red", marginTop:"25px", marginLeft:"5px"}}>FooD!e</h2>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : {onlineStatus ? "🟢" : "🔴" }
                    </li>
                    <li><Link to="/">Home</Link></li>
                    {/* <li>Menu</li> */}
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>🛒</li>
                    <div className="login">
                        <button className="loginBtn"  onClick={() =>
                            loginBtn == "Login ⛄" ? setLoginBtn("Logout") : setLoginBtn("Login ⛄")
                        } >{loginBtn}</button>
                    </div>
                    
                </ul>
            </div>

        </div>
    );
};

export default Header;