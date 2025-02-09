import RestroCard from "./RestroCard";
import restroList from "../utils/mockRestroData";
import { useState } from "react";


const Body = () => {

    const [listOfRestro, setListOfRestro] = useState(restroList); 

    return (

    <div className="body">

        <div className="filter">
            <button className="filter-btn"
                 onClick={() => {
                    const filteredRestroData = listOfRestro.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                 setListOfRestro(filteredRestroData);
                }
            }>Top Rated Restaurants</button>
        </div>

        <div className="restro-container">
            { 
                listOfRestro.map((restaurant) => (
                    <RestroCard key={restaurant.info.id} restroData= {restaurant} />
            ))}
            {/* <RestroCard restroData={restroList}/> */}
        </div>
    </div>
    );
}

// Default Export
export default Body;