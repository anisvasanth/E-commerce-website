import React, { createContext, useState } from 'react';
import all_product from '../components/Assests/all_product';
export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 1; index <= all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = all_product.find((p) => p.id === Number(itemId));
        if (product) {
          total += product.new_price * cartItems[itemId];
        }
      }
    }
    return total.toFixed(2);
  };
  const getTotalCartItems = () => {
    let totalItem =0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            totalItem+=cartItems[item];
        }
    }
    return totalItem
  }
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
 