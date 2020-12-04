import React from 'react';
import './Burger.css';
import Ingredient from '../Burger/Ingredient/Ingredient';

const Burger = (props) => {
  let changedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <Ingredient key={ingKey + i} type={ingKey} />
      });
    })
    .reduce((acc, cur) => {
      return acc.concat(cur)
    }, []);

  if (changedIngredients.length === 0) {
    changedIngredients = <p>Please add ingredients!</p>
  }

  return (
    <div className='Burger'>
      <Ingredient type='bread-top' />
      {changedIngredients}
      <Ingredient type='bread-bottom' />
    </div>
  );
}

export default Burger;