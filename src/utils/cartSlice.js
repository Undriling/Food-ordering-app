import { createSlice } from "@reduxjs/toolkit";

// Load cart items from localStorage
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

            // Save to localStorage
            localStorage.setItem("cart", JSON.stringify(state.items));

        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0
            // Clear from localStorage
            localStorage.removeItem("cart");
        }
    }
})

// Selector to calculate cart total
export const selectCartTotal = (state) =>
    state.cart.items.reduce((total, item) => {
      const price =
        item?.card?.info?.defaultPrice / 100
          ? item?.card?.info?.defaultPrice / 100
          : item?.card?.info?.price / 100;
      return total + price;
    }, 0);

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;