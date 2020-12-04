import React from 'react';
import './BuildControl.css'

const BuildControl = (props) => (
  <div className='BuildControl'>
    <div>{props.material}</div>
    <button onClick={props.removed} disabled={props.disabled}>Less</button>
    <button onClick={props.added}>More</button>
  </div>
)

export default BuildControl