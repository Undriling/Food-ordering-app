import { useState, useEffect } from "react";
import { fetchRestro_API } from "../utils/constants";

const useRestroList = () => {
    const [listOfRestro, setListOfRestro] = useState([]); 

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
    };
    return listOfRestro;
};


// export default useRestroList;
