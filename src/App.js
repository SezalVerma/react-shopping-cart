import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 9999,
          title: "Phone",
          qty: 1,
          img: "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          id: 1,
        },
        {
          price: 999,
          title: "Watch",
          qty: 5,
          img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80",
          id: 2,
        },
        {
          price: 69999,
          title: "Laptop",
          qty: 2,
          img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
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
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  getCartTotal = () => {
    const { products } = this.state;
    let total = 0;
    products.map((product) => {
      total += total + product.qty * product.price;
    });
    return total;
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <h1> Cart </h1>
        <Cart
          products={products}
          onIncreaseQty={this.handleIncreaseQty}
          onDecreaseQty={this.handleDecreaseQty}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ fontSize: 20, padding: 10 }}>
          Total : Rs {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
