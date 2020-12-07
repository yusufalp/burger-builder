import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map((ingKey, i) => {
        return <li key={i}>{`${ingKey[0].toUpperCase()}${ingKey.substring(1)}`}: {this.props.ingredients[ingKey]}</li>
      });
    return (
      <Aux>
        <h3>Your Order Summary</h3>
        <p>You added following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p>TOTAL: {this.props.price.toFixed(2)}</p>
        <p>Ready to Checkout?</p>
        <Button
          clicked={this.props.purchaseCanceled}
          btnType='Danger'>Cancel</Button>
        <Button
          clicked={this.props.purchaseContinued}
          btnType='Success'>Continue</Button>
      </Aux>
    );
  }
}

export default OrderSummary;