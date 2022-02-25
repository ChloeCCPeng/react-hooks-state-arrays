import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);

    const updateFood = [...foods, newFood]
    setFoods(updateFood);
  }

  const foodList = foods.map((food) => (
    <li key={food.id}> onClick={()=> handleLiClick(food.id)}
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function handleLiClick(id) {
    const updatedFoods = foods.map((food) => {
      [1, 2, 3].filter((number) => number !== 3);
      if (food.id === id) {
          return { ...food, heatLevel: food.heatLevel + 1, }
      } else {
         return food 
      }
    })
    setFoods(updatedFoods)
  }

  
  
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );


}


export default SpicyFoodList;

// const updatedTodos = todos.map(todo => {
//   if (todo.id === id) {
//       return { ...todo, completed }
//   } else {
//      return todo 
//   }
// })
// setTodos(updatedTodos)
