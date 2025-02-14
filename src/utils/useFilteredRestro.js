import { useState, useEffect } from "react";
import { fetchRestro_API } from "../utils/constants";

const useFilteredRestro = () => {
    const [filteredRestro, setFilteredRestro] = useState([]);

    useEffect(() => {
        console.log(filteredRestro)
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch (fetchRestro_API);
        const json = await data.json();

        console.log(json)

        //optional chaining
        setFilteredRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };
    return setFilteredRestro;
}

export default useFilteredRestro;