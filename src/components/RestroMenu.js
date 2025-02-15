import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useRestroMenu from "../utils/useRestroMenu";

const RestroMenu = () => {

    const {resId} = useParams();

    const restroInfo = useRestroMenu(resId);

     
    if (restroInfo == null) return (<Shimmer/>);

    const {id, name, areaName, avgRating, totalRatingsString, city, cuisines, costForTwoMessage } = restroInfo?.cards[2]?.card?.card?.info;
    const groupedCard = restroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
    

    return (

        <div className="rsetromenu-container my-20 mx-5 p-2.5">

            <div className="menuRName-cont flex flex-wrap" key={id}>
                <div className="font-bold p-[5px] text-2xl font-serif">
                    <h1 className="font-bold p-[5px] text-3xl font-serif">{name}</h1>
                    <h3>{areaName}, {city}</h3>
                    <h3>{cuisines.join(", ")}</h3>
                    <h3>{costForTwoMessage}</h3>
                </div>
                <div className="menuRRating py-[50px] px-[100px] justify-items-center font-bold p-[5px] text-2xl font-serif">
                    <h2>{avgRating} ⭐</h2>
                    <h3>{totalRatingsString}</h3>
                </div>
            </div>

            <h3 className="Menu mt-1.5 ml-40 font-medium text-xl font-serif">MENU</h3>

            <div className="menuItems flex flex-wrap py-2.5">
                <ul>
                    {(groupedCard || []).map((item) => (
                        <li className="list-none py-2.5 font-medium p-[5px] text-lg font-serif" key={item?.info?.id}>{item?.card?.info?.name}  ({item?.card?.info?.category})   <b> - </b></li>
                    ))} 
                </ul>
                <ul>
                    {(groupedCard || []).map((item) => (
                            <li className="list-none py-2.5 ml-7 font-medium p-[5px] text-lg font-sans" key={item?.info?.id}>{item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100}.00</li>
                        ))} 
                </ul>
            </div>

        </div>
    );

}

export default RestroMenu;