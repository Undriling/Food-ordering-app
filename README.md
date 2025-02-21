# Food-ordering-app

oder Link fn -
const orderLink = (link) => {
        window.open(restroData.cta.link, '_blank');
    }

key={restroData.info.id} onClick={()=> orderLink()}

Order Link Btn -
const [linkOfRestro, setLinkOfRestro] = useState([]); 
    useEffect(() => {
        console.log(linkOfRestro)
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch (fetchRestro_API);
        const json = await data.json();

        console.log(json)
        //optional chaining
        setLinkOfRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const orderLink = () => {
        window.open(setLinkOfRestro?.cta?.link, '_blank');
    };
    return 
    (
    <div className="orderBtn">
                <button key={setLinkOfRestro?.info.id} onClick={()=> orderLink()}>Order Now👆</button>
    </div>
    )


* cal sow Index ---
    // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        setShowItems(!showItems);
    }
    {
        showItems && <CategoryItemsList items={data?.itemCards} />
    }


# Redux ---
 -> npm install @reduxjs/toolkit
 -> npm install react-redux
 -> ./utils/appStore.js ---

    import { configureStore } from "@reduxjs/toolkit";

    const appStore = configureStore({
        reducer: {
            cart: cartReducer,
        }
    })


    export default appStore;

 -> ./utils/cartSlice.js ---
    
    import { createSlice } from "@reduxjs/toolkit";

    const cartSlice = createSlice ({
        name: 'cart',
        initialState : {
            items : []
        },
        reducers: {
            addItem: (state, action) => {
                state.items.push(action.payload)
            },
            removeItem: (state) => {
                state.items.pop()
            },
            clearCart: (state) => {
                state.items.length = 0
            }
        }
    })

    export const {addItem, removeItem, clearCart} = cartSlice.actions

    export default cartSlice.reducer;

 -> App.js ---
    
    import { Provider } from "react-redux";
    import appStore from "./utils/appStore";

    return (
        <div className="app">
            <Provider store={appStore}>
                <UserContext.Provider value={{loggedInUser : userName}}>
                    <Header />
                    <Outlet />
                </UserContext.Provider>
            </Provider>
        </div>
    );

# Open Menu-
<!-- Toggle function -->
    const toggleShowItemsIndex = (index) => {
        setShowItemsIndex(showItemsIndex === index ? null : index);
      }; 

    {
                categories.map((category,index) => (
                    <RestroCategory data={category?.card?.card}
                    showItems={index === showItemsIndex ? true : false}
                    setShowItemsIndex={() => setShowItemsIndex()}
                    onClick={() => toggleShowItemsIndex(index)}
                    />
    
                ))
            
            }

# To save the data to local storage (when we reload that data will not remove from the cart, the data should store in both, Redux and the Local Storage. And when we clear that data will remove from both) --- Changes made in cartSlice.js
=>
import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage if exists ---
const loadCartDataFromLocalStorage = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };

const cartSlice = createSlice ({
    name: 'cart',
    initialState : {
        items : loadCartDataFromLocalStorage(), // Load from localStorage
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            // Save to localStorage---
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0
            // Clear from localStorage---
            localStorage.removeItem("cart");
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

# To find Cart total ---
In cartSlice.js---
    export const selectCartTotal = (state) =>
    state.cart.items.reduce((total, item) => {
      const price =
        item?.card?.info?.defaultPrice / 100
          ? item?.card?.info?.defaultPrice / 100
          : item?.card?.info?.price / 100;
      return total + price;
    }, 0);

& In cart.js---
    import { clearCart,selectCartTotal } from "../utils/cartSlice";
    const cartTotal = useSelector(selectCartTotal); // Get cart total
    {cartItems.length === 0 ?
     <h3>Your cart is empty. Please add items to order...</h3>
    : (<h2 className="text-xl font-bold font-serif mt-4">
                Total: ₹ {cartTotal.toFixed(2)}
    </h2>)}



