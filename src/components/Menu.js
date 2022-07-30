
import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem"

const Menu = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("https://salome-api.herokuapp.com/meal")
      .then((r) => r.json())
      .then((data) => setFood(data));
  }, []);
const foodlist= food.map((meal) => (
  <MenuItem
    key={meal.idCategory}
    name={meal.strCategory}
    image={meal.strCategoryThumb}
    price={meal.price}
    description={meal.strCategoryDescription}
  />
))
  return (
    <div className="food">
      {foodlist}
    </div>
  );
};

export default Menu;



















/*import React from 'react';


const Food = ({ id, name, image, price, description }) => {
  return (
    <div className="food" key={id}>
      <img src={image} alt="Keroma loading" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <button>Order</button>
    </div>
  );
};
export default Food

*/



























/*import React, { setData, useEffect } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  
  return (
    
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {food.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;*/
