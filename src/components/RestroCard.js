import { CDN_URL } from "../utils/constants";
import restroList from "../utils/mockRestroData";

// import Body from "./Body";

const RestroCard = (props) => {
    const {restroData} = props;

    const {name,avgRating, locality, areaName, costForTwo, cloudinaryImageId, cuisines} = restroData?.info;

    
    // console.log(restroData.info)

    return (
        <div className="font-normal font-serif p-[5px] m-[10px] w-[270px] my-[30px] mx-15px rounded-xl shadow-[0_0_3px_#d4ecff] bg-[#fff] overflow-hidden transition-all duration-200 ease-in-out hover:shadow-[2px_2px_5px_#bebdbd] cursor-pointer bg-white-#f9fdff hover:transform -translate-y-1">
            <img className="w-250px h-200px p-1.5 rounded-2xl" src={CDN_URL +cloudinaryImageId}/>
            <h2 className="py-[5px] text-2xl">{name}</h2>
            <h3 className="py-[5px]">{locality}, {areaName}</h3>
            <div className="flex m-auto">
                <h4 className="text-green-500">Veg</h4>
                <h4 className="mx-[5px]">&</h4>
                <h4 className="nv-categ text-red-600">Non-Veg</h4>
            </div>
            <h4 className="py-[5px] text-sans">{avgRating}⭐</h4>
            <h4 className="py-[5px]">{cuisines.join(",")}</h4>
            <h4 className="py-[5px] text-sans">{costForTwo}</h4>
            <h4 className="py-[5px]">{restroData.info.sla.deliveryTime} minutes away</h4>
        </div>
    );
};

export const vegLabel = (RestroCard) => {
    return (props) => {
        return (
            <div className="mb-[-25px]">
                <div className="mb-[-19px]">
                    <label className="bg-[#f0f0f0] text-green-700 m-2 p-2 rounded-[10px]">Veg Available</label>
                </div>
                <RestroCard {...props}/>
            </div>
        )
    }
}


export default RestroCard;