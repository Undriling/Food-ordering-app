import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { fetchRestro_API } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { vegLabel } from "./RestroCard";


const Body = () => {

    const [listOfRestro, setListOfRestro] = useState([]); 
    const [searchText, setSearchText] = useState("");
    const [filteredRestro, setFilteredRestro] = useState([]);

    const WithVegLabel = vegLabel(RestroCard);


    // console.log(listOfRestro)
    // const [filteredCuisines, setFilteredCuisines] = useState([]);


    useEffect(() => {
        console.log(listOfRestro)
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch (fetchRestro_API);
        const json = await data.json();

        // console.log(json)

        //optional chaining
        setListOfRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return (
        <div className="online-status">
            <h1 className="font my-[90px] font-medium text-3xl font-serif"> Looks like you're offline !!! Please check your internet connection</h1>
        </div>
    );

    return listOfRestro.length == 0 ? (<Shimmer />) : (

    <div className="body">
        <div className="find-ele flex flex-wrap p-2.5">

            <div className="flex flex-wrap mt-[90px] p-5">
                <input type="text" className="w-[200px] h-[30px] rounded-[10px] border-none p-1.5 ml-2.5 bg-[#f0f0f0] font-serif text-[15]" placeholder="e.g. kfc" value={searchText} onChange={(a) => {
                    setSearchText(a.target.value);
                    
                }}/>
                <button className="search-btn border-none rounded-[50%] h-10 w-10 text-lg bg-white hover:bg-[#f0f0f0] cursor-pointer" onClick={() => {
                    const filteredRestro = listOfRestro.filter(
                        (res) => res?.info?.name.toLowerCase()?.includes(searchText.toLowerCase())
                    );
                
                    setFilteredRestro(filteredRestro);
                    // alert("Searching...")
                }}>🔍</button>
            </div>

            <div className="mt-[113px] ml-[20px]">
                <button className="filter-btn font-medium font-serif border-none bg-[rgb(238,149,149)] rounded-[40px] h-[35px] w-52 hover:bg-[aqua] cursor-pointer"
                    onClick={() => {
                        const filteredRestroData = listOfRestro?.filter(
                            (res) => res?.info?.avgRating > 4.5
                        )
                        setFilteredRestro(filteredRestroData);
                    //  console.log(filteredRestroData)
                }
                }>Top Rated Restaurants</button>
            </div>

        </div>

        <div className="flex flex-wrap px-10">
            { 
                filteredRestro.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                        { restaurant.info.isOpen ? <WithVegLabel restroData= {restaurant}/> :
                            <RestroCard restroData= {restaurant} />
                        }
                    </Link>
                    
            ))};
            {/* <RestroCard restroData={restroList}/> */}
        </div>
    </div>
    );
}

// Default Export
export default Body;