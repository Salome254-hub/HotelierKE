import React, {useState, useEffect} from 'react'
import Food from './Menu';

export const MenuList = () => {
  
  const [food, setFood] = useState([]);
  useEffect(() => {
    getFood();
  }, []);

  
    
  const getFood = () => {
    fetch("https://salome-api.herokuapp.com/meal")
      .then((response) => response.json())
      .then((data) => {
        setFood(data);
      })
      .catch((error) => console.log(error));
  };
    
    console.log(getFood);
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    
  };
  // const filterSearch =
  function handleFormChange(event) {
    setSearch(event.target.value);
  }
  return (
    <div>
      <div></div>
      <form className="search" onSubmit={handleFormSubmit}>
        <input
          className="bar"
          type="text"
          setFood={setFood}
          value={search}
          onChange={handleFormChange}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {
        Food.filter((meal) => {
          if (search === "") {
            return meal;
          } else if (meal.strCategory.toLowerCase().includes(search.toLocaleLowerCase())) {
            return meal;
          }
        })
          .map((meal) => (
            <Food
              key={meal.idCategory}
              name={meal.strCategory}
              image={meal.strCategoryThumb}
              price={meal.price}
              description={meal.strCategoryDescription}
            />
          ))}
    </div>
  );
    














