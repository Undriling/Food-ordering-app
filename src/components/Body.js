import RestroCard from "./RestroCard";
// import restroList from "../utils/mockRestroData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";


const Body = () => {

    const [listOfRestro, setListOfRestro] = useState([]); 
    const [searchText, setSearchText] = useState("");
    const [filteredRestro, setFilteredRestro] = useState([]);
    // const [filteredCuisines, setFilteredCuisines] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1157917&lng=91.7085933&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log(json)

        //optional chaining
        setListOfRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


    };


    // conditional rendering
    // if (listOfRestro.length == 0 ){
    //     return (<Shimmer />)
    // }


    return listOfRestro.length == 0 ? (<Shimmer />) : (

    <div className="body">
        <div className="find-ele">

            <div className="search">
                <input type="text" placeholder="e.g Restronames" value={searchText} onChange={(a) => {
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
                            (res) => res.info.avgRating > 4
                        );
                    setListOfRestro(filteredRestroData);
                    //  console.log(filteredRestroData)
                    }
                }>Top Rated Restaurants</button>
            </div>

        </div>

        <div className="restro-container">
            { 
                filteredRestro.map((restaurant) => (
                    <RestroCard key={restaurant.info.id} restroData= {restaurant} />
            ))};
            {/* <RestroCard restroData={restroList}/> */}
        </div>
    </div>
    );
}

// Default Export
export default Body;