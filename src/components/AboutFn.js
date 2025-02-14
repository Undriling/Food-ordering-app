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
            <h2>{userInfo?.login}</h2>
            <h3>{userInfo?.name} </h3>
            <h3>Loaction: {userInfo?.location}</h3>
            <h4><Link to={window.open(userInfo?.blog , "_blank")}>TO MY PORTFOLIO</Link></h4>
            <button onClick={() => { window.open(userInfo.html_url, '_blank') }}>.github</button>
        </div>
    )
}

export default User;