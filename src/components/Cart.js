import { useDispatch, useSelector } from "react-redux";
import CategoryItemsList from "./CategoryItemsList";
import { clearCart,selectCartTotal } from "../utils/cartSlice";



const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const cartTotal = useSelector(selectCartTotal); // cart total

    const dispatch = useDispatch();
    
    const clearCartItems = () => {
        dispatch(clearCart())
    };
    

    return (
        <div className="justify-items-center">
            <div className="mt-[90px] mb-3 text-center">
                <h1 className="text-3xl font-bold font-serif">Cart</h1>
                <button className="bg-black text-white text-sm font-serif p-1 m-2 rounded-lg cursor-pointer hover:bg-gray-700 hover:font-extrabold"  onClick={clearCartItems}>
                    Clear Cart🗑️
                </button>
                {cartItems.length === 0 ? <h3>Your cart is empty. Please add items to order...</h3>
                    : (<h2 className="text-xl font-bold font-sans mt-4">
                            Total: ₹{cartTotal.toFixed(2)}
                        </h2>)
                }
            </div>
            <div className="w-6/12">
                    <CategoryItemsList items={cartItems} showBtn={false}/>
            </div>
        </div>
    )
}

export default Cart;