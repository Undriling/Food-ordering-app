// Named Import
import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default Header;