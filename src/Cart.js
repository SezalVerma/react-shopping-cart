import React, { Component } from "react";
import CartItem from "./CartItem";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 9999,
          title: "Phone",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 999,
          title: "Watch",
          qty: 5,
          img: "",
          id: 2,
        },
        {
          price: 99,
          title: "Pen",
          qty: 10,
          img: "",
          id: 3,
        },
      ],
    };
  }
  handleIncreaseQty = (product) => {
    const { products } = this.state;
    // get index of desired product in arr of products
    const index = products.indexOf(product);
    products[index].qty += 1;
    // set products in state to modified products
    this.setState({
      products: products,
    });
  };
  handleDecreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // if qty is 0, dont decrease
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    // when key & value are same, pass once
    this.setState({
      products,
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    // add all products to items [] whose id doesnt match to given id,
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQty={this.handleIncreaseQty}
              onDecreaseQty={this.handleDecreaseQty}
              onDeleteProduct={this.handleDeleteProduct}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
