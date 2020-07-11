import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: { street: "", postalCode: "" },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Hoang Anh Minh",
        address: {
          street: "Minh Khai",
          zipCode: "100000",
          country: "Vietname",
        },
        email: "anhminh10a2hoa@gmail.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({
          loading: false,
        });
        this.props.history.push("/");
      })
      .catch((err) =>
        this.setState({
          loading: false,
        })
      );
    console.log(this.props.ingredients);
  };
  render() {
    let form = (
      <form>
        <input
          type="text"
          className={classes.Input}
          name="name"
          placeholder="Your name"
        />
        <input
          type="email"
          className={classes.Input}
          name="email"
          placeholder="Your email"
        />
        <input
          type="text"
          className={classes.Input}
          name="street"
          placeholder="Street"
        />
        <input
          type="text"
          className={classes.Input}
          name="postal"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
