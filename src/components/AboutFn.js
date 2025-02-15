import { useEffect, useState } from "react";
import { github_User_API } from "../utils/constants";
import { Link } from "react-router";
const User = (props) => {

    const [userInfo, setUserInfo] = useState();

    useEffect (() => {
        fetchUser()
    }, []);

    const fetchUser = async () => {
        const data = await fetch (github_User_API)
        const json = await data.json();

        console.log(json)
        setUserInfo(json)
    };

    return (

        <div className="user-card">
            {/* <img src={userInfo?.avatar_url}/> */}
            <h2 className="font-medium p-[5px] text-lg font-serif">{userInfo?.login}</h2>
            <h3 className="font-medium p-[5px] text-lg font-serif">{userInfo?.name} </h3>
            <h3 className="font-medium p-[5px] text-lg font-serif">Loaction: {userInfo?.location}</h3>
            <h4 className="font-medium p-[5px] text-lg font-serif hover:text-blue-600 hover:cursor-pointer"><Link to={window.open(userInfo?.blog , "_blank")}>TO MY PORTFOLIO</Link></h4>
            <button className="w-[70px] h-[30px] font-medium font-[Times New Roman] rounded-[5px] bg-[rgb(203,203,210)] border-none hover:border-[groove] hover:rounded-[10px] hover:bg-[#f0f0f0] hover:cursor-pointer" onClick={() => { window.open(userInfo.html_url, '_blank') }}>.github</button>
        </div>
    )
}

export default User;