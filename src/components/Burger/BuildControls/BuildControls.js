import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { material: 'Salad', type: 'salad' },
  { material: 'Cheese', type: 'cheese' },
  { material: 'Bacon', type: 'bacon' },
  { material: 'Meat', type: 'meat' },
]

const BuildControls = (props) => (
  <div className='BuildControls'>
    <p>Current price: {props.price.toFixed(2)}</p>
    {controls.map((control, i) => (
      <BuildControl
        key={i}
        material={control.material}
        added={() => props.addIngredient(control.type)}
        removed={() => props.removeIngredient(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
  </div>
)

export default BuildControls