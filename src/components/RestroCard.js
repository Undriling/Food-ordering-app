import { CDN_URL } from "../utils/constants";
import restroList from "../utils/mockRestroData";

// import Body from "./Body";

const RestroCard = (props) => {
    const {restroData} = props;

    const {name,avgRating, locality, areaName, costForTwo, cloudinaryImageId, cuisines} = restroData?.info;

    // Order click fnc

    return (
        <div className="font-normal font-serif p-[5px] m-[10px] w-[270px] my-[30px] mx-15px rounded-xl shadow-[0_0_3px_#d4ecff] bg-[#fff] overflow-hidden ease-[all-(0.2s)-ease] hover:shadow-[2px_2px_5px_#bebdbd] cursor-pointer bg-white-#f9fdff translate-y-[-2px]">
            <img className="w-250px h-200px p-1.5 rounded-2xl" src={CDN_URL +cloudinaryImageId}/>
            <h2 className="py-[5px]">{name}</h2>
            <h3 className="py-[5px]">{locality}, {areaName}</h3>
            <div className="flex m-auto">
                <h4 className="text-green-500">Veg</h4>
                <h4 className="mx-[5px]">&</h4>
                <h4 className="nv-categ text-red-600">Non-Veg</h4>
            </div>
            <h4 className="py-[5px]">{avgRating}⭐</h4>
            <h4 className="py-[5px]">{cuisines.join(",")}</h4>
            <h4 className="py-[5px]">{costForTwo}</h4>
            <h4 className="py-[5px]">{restroData.info.sla.deliveryTime} minutes away</h4>
        </div>
    );
};

export default RestroCard;