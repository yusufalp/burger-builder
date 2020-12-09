import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const Sidedrawer = (props) => {
  let attachedClasses = `Sidedrawer Close`;
  if (props.open) {
    attachedClasses = `Sidedrawer Open`
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.toggle} />
      <div className={attachedClasses}>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}

export default Sidedrawer;