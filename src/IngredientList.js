import React from 'react';

const IngredientList = (props) => (
  <div id="ingredients">
    <h2>Add your Ingredients:</h2> 
    {props.ingredients.map((ingredient, i) =>
        <h4 key={i}>{ingredient.name}<button onClick={(e) => 
        {props.addIngredient(e, i)}}>Add</button></h4>)}            
      
  </div>
)

export default IngredientList;