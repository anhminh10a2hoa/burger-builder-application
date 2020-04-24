import React, { Component } from "react";

import Auxa from "../../../hoc/Auxa/Auxa";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  // This could be functional component doesn't have to be class component
  // componentWillUpdate() {
  //   console.log("[OrderSummary] componentWillUpdate");
  // }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Auxa>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total price: </strong>
          {this.props.price.toFixed(2)}
        </p>
        <p>Continue to checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancel}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Auxa>
    );
  }
}
export default OrderSummary;
