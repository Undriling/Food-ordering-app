import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
    const {restroData} = props;

    const {name,avgRating, locality, areaName, costForTwo, cloudinaryImageId, cuisines} = restroData?.info;

    return (
        <div className="card-container">
            <img className="restro-logo" src={CDN_URL +cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{locality}, {areaName}</h3>
            <div className="categ" style={{display: "flex", margin: "auto"}}>
                <h4 className="v-categ" style={{color: "green"}}>Veg</h4>
                <h4 style={{marginLeft: "5px", marginRight:"5px"}}>&</h4>
                <h4 className="nv-categ" style={{color: "red"}}>Non-Veg</h4>
            </div>
            <h4>{avgRating}⭐</h4>
            <h4>{cuisines.join(",")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{restroData.info.sla.deliveryTime} minutes</h4>

        </div>
    );
};

export default RestroCard;