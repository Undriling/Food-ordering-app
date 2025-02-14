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

        <div className="rsetromenu-container">

            <div className="menuRName-cont" key={id}>
                <div className="menuRName">
                    <h1>{name}</h1>
                    <h3>{areaName}, {city}</h3>
                    <h3>{cuisines.join(", ")}</h3>
                    <h3>{costForTwoMessage}</h3>
                </div>
                <div className="menuRRating">
                    <h2>{avgRating} ⭐</h2>
                    <h3>{totalRatingsString}</h3>
                </div>
            </div>

            <h3 className="Menu">MENU</h3>

            <div className="menuItems">
                <ul>
                    {(groupedCard || []).map((item) => (
                        <li key={item?.info?.id}>{item?.card?.info?.name}  ({item?.card?.info?.category})   <b> - </b></li>
                    ))} 
                </ul>
                <ul>
                    {(groupedCard || []).map((item) => (
                            <li key={item?.info?.id}>{item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100}.00</li>
                        ))} 
                </ul>
            </div>

        </div>
    );

}

export default RestroMenu;