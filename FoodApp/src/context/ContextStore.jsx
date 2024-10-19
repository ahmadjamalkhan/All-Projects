import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartitems] = useState({});
  useEffect(() => {
    console.log(totalCartItem);
  }, [cartItems]);
  const totalCartItem=Object.keys(cartItems).length
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      console.log(!cartItems[itemId]);

      setCartitems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const subTotalAmmount = () => {
    let subTotal=0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
         subTotal += itemInfo.price * cartItems[item];
        // return subtotal
      }
    }
    return subTotal
  };
  const contextValue = {
    food_list,
    cartItems,
    setCartitems,
    addToCart,
    removeFromCart,subTotalAmmount,totalCartItem
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
