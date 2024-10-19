import React, { useContext } from "react";
import { StoreContext } from "../../context/ContextStore";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";
function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext); // Context se food_list le rahe ho
  return (
    <div className="food-display" id="food-display">
      <h2 className="">Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          console.log(item.id);
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                image={item.image}
                description={item.description} // Typo fixed here
                price={item.price}
                name={item.name}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
