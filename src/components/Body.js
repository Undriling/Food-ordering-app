import RestroCard from "./RestroCard";
// import restroList from "../utils/mockRestroData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { fetchRestro_API } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

    const [listOfRestro, setListOfRestro] = useState([]); 
    const [searchText, setSearchText] = useState("");
    const [filteredRestro, setFilteredRestro] = useState([]);
    // const [filteredCuisines, setFilteredCuisines] = useState([]);


    useEffect(() => {
        console.log(listOfRestro)
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch (fetchRestro_API);
        const json = await data.json();

        console.log(json)

        //optional chaining
        setListOfRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return (
        <div className="online-status">
            <h1> Looks like you're offline !!! Please check your internet connection</h1>
        </div>
    );

    return listOfRestro.length == 0 ? (<Shimmer />) : (

    <div className="body">
        <div className="find-ele">

            <div className="search">
                <input type="text" placeholder="e.g. kfc" value={searchText} onChange={(a) => {
                    setSearchText(a.target.value);
                    
                }}/>
                <button className="search-btn" onClick={() => {
                    const filteredRestro = listOfRestro.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                
                    setFilteredRestro(filteredRestro);
                    // alert("Searching...")
                }}>🔍</button>
            </div>

            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filteredRestroData = listOfRestro.filter(
                            (res) => res.info.avgRating >= 4.5
                        )
                    setListOfRestro(filteredRestroData);
                    //  console.log(filteredRestroData)
                }
                }>Top Rated Restaurants</button>
            </div>

        </div>

        <div className="restro-container">
            { 
                filteredRestro.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                        <RestroCard restroData= {restaurant} />
                    </Link>
                    
            ))};
            {/* <RestroCard restroData={restroList}/> */}
        </div>
    </div>
    );
}

// Default Export
export default Body;