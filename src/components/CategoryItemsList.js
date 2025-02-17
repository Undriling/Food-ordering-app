import { CDN_URL } from "../utils/constants";
const CategoryItemsList = ({items}) => {
    console.log(items)
    return (<div>
        {items.map((item) => (
            <div key={item?.card?.info?.id} className="flex flex-wrap p-2 m-2 shadow-sm rounded-2xl">
                <div className="w-9/12">
                    <h4 className="text-lg font-semibold font-serif">{item?.card?.info?.name} {item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? "🔴" : "🟢"}</h4>
                    <h6 className="font-semibold font-sans">₹ {item?.card?.info?.defaultPrice/100 ? item?.card?.info?.defaultPrice/100 : item?.card?.info?.price/100}</h6>
                    <p className="font-extralight text-sm font-sans">{item?.card?.info?.description}</p>
                </div>
                <div className="w-3/12 pl-1 rounded-2xl">
                    <img className="rounded-2xl"  src={(CDN_URL)+ item?.card?.info?.imageId}/>
                </div>
            </div>
        ))}
        
    </div>)

};

export default CategoryItemsList;