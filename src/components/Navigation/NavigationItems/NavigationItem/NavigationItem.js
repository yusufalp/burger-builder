import React from 'react';
import './NavigationItem.css';

const NavigationItem = (props) => (

  <li className='NavigationItem'>
    <a href={props.link}>{props.children}</a>
  </li>
);

export default NavigationItem;