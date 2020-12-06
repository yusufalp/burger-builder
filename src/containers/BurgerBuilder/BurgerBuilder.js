import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.2,
  cheese: 0.5,
  meat: 1.3,
  bacon: 0.8,
}

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 3,
    readyToPurchase: false,
    ordering: false
  }

  readyToPurchaseHandler = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(ingKey => {
        return ingredients[ingKey]
      })
      .reduce((acc, cur) => {
        return acc + cur
      }, 0);

    this.setState({
      readyToPurchase: sum > 0
    });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;

    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const priceAdded = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdded;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.readyToPurchaseHandler(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;

    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    const priceDeducted = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeducted;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.readyToPurchaseHandler(updatedIngredients);
  }

  orderHandler = () => {
    this.setState({
      ordering: true
    })
  }

  orderCancelHandler = () => {
    this.setState({
      ordering: false
    })
  }

  orderContinueHandler = () => {
    alert('You continued!')
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Modal show={this.state.ordering} modalClosed={this.orderCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCanceled={this.orderCancelHandler}
            purchaseContinued={this.orderContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          price={this.state.totalPrice}
          disabled={disabledInfo}
          readyToPurchase={this.state.readyToPurchase}
          ordering={this.orderHandler}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder;