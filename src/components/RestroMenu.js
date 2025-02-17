import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useRestroMenu from "../utils/useRestroMenu";
import RestroCategory from "./RestroCategory";
import { useState } from "react";
const RestroMenu = () => {

    const {resId} = useParams();

    const restroInfo = useRestroMenu(resId);

    const [showItemsIndex, setShowItemsIndex] = useState(null);

     
    if (restroInfo == null) return (<Shimmer/>);

    const {id, name, areaName, avgRating, totalRatingsString, city, cuisines, costForTwoMessage } = restroInfo?.cards[2]?.card?.card?.info;
    // const groupedCard = restroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;

    console.log(restroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = restroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log(categories)

    const toggleShowItemsIndex = (index) => {
        setShowItemsIndex(showItemsIndex === index ? null : index);
      };
    

    return (

        <div className="my-20 justify-items-center align-middle">

            <div className="flex flex-wrap" key={id}>
                <div className="font-bold p-[5px] text-2xl font-serif ">
                    <h1 className="font-bold p-[5px] text-3xl font-serif">{name}</h1>
                    <h3>{areaName}, {city}</h3>
                    <h3>{cuisines.join(", ")}</h3>
                    <h3>{costForTwoMessage}</h3>
                </div>
                <div className="menuRRating py-[40px] ml-[50px]  justify-items-center font-bold p-[5px] text-2xl font-serif">
                    <h2>{avgRating} ⭐</h2>
                    <h3 className="mt-4 font-sans">{totalRatingsString}</h3>
                </div>
            </div>

            <h3 className="my-3 font-bold text-2xl font-serif">MENU</h3>
            {
                categories.map((category,index) => (
                    <RestroCategory data={category?.card?.card}
                    showItems={index === showItemsIndex ? true : false}
                    // setShowItemsIndex={() => setShowItemsIndex()}
                    onClick={() => toggleShowItemsIndex(index)}
                    />
    
                ))
            
            }
               
            {/* <div className="menuItems flex flex-wrap py-2.5"></div> */}

        </div>
    );

}

export default RestroMenu;