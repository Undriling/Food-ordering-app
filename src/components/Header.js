// Named Import
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login ⛄");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-[rgb(225,221,221)] w-[100%] fixed top-0 right-0 left-0 z-99 h-[70px]">
            <div className="flex cursor-pointer">
                <Link to="/"><img className="w-[70px] h-[70px] rounded-[50px]" src= {LOGO_URL} /> </Link>
                <h2 style={{color:"red", marginTop:"25px", marginLeft:"5px"}}>FooD!e</h2>
            </div>
            <div className="nav-items">
                <ul className="flex justify-between list-none my-[20px] mx-[10px] p-[10px] text-lg">
                    <li className="mx-1.5 px-2.5">
                        Online Status : {onlineStatus ? "🟢" : "🔴" }
                    </li>
                    <li className="mx-1.5 px-2.5 hover:text-blue-700 cursor-pointer "><Link to="/">Home</Link></li>
                    {/* <li>Menu</li> */}
                    <li className="mx-1.5 px-2.5 hover:text-blue-700 cursor-pointer "><Link to="/about">About Us</Link></li>
                    <li className="mx-1.5 px-2.5 hover:text-blue-700 cursor-pointer "><Link to="/contact">Contact Us</Link></li>
                    <li className="mx-1.5 px-2.5">🛒</li>
                    <div className="login bg-[#f0f0f0] rounded-[20px]">
                        <button className="border-none bg-[#f0f0f0] font-normal rounded-[20px]"  onClick={() =>
                            loginBtn == "Login ⛄" ? setLoginBtn("Logout") : setLoginBtn("Login ⛄")
                        } >{loginBtn}</button>
                    </div>
                    
                </ul>
            </div>

        </div>
    );
};

export default Header;