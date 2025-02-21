import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const CategoryItemsList = ({items, restaurantName, showBtn = true}) => {

    const dispatch = useDispatch()

    const handleCartItems = (item) => {
        dispatch(addItem(item))
    }
    // console.log(dispatch)

       

    return (<div key={items?.index}>
        {items.map((item) => (
            <div key={item?.card?.info?.id} className="flex flex-wrap p-2 m-2 shadow-sm rounded-2xl">
                <div className="w-9/12">
                    <h4 className="text-lg font-semibold font-serif">{item?.card?.info?.name} {item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? "🔴" : "🟢"}</h4>
                    <h6 className="font-semibold font-sans">₹ {item?.card?.info?.defaultPrice/100 ? item?.card?.info?.defaultPrice/100 : item?.card?.info?.price/100}</h6>
                    <p className="font-extralight text-sm font-sans">{item?.card?.info?.description}</p>
                </div>
                <div className="w-3/12 pl-1 rounded-2xl">
                    <img className="rounded-2xl"  src={(CDN_URL)+ item?.card?.info?.imageId}/>

                    {
                        showBtn && <button className="p-1 mx-12 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-800" onClick={() => handleCartItems(item)}>
                        Add+
                        </button>
                    }
                </div>
            </div>
        ))}
        
    </div>)

};

export default CategoryItemsList;