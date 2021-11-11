import React, { Component } from "react";

class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Phone",
      qty: 1,
      img: "",
    };
  }
  increaseQty = () => {
    // 1. change state for react ui & render component
    // this.setState({
    //   qty: this.state.qty + 1,
    // });

    // 2. change state
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };
  decreaseQty = () => {
    if (this.state.qty === 0) {
      return;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };
  render() {
    //   Object Destructuring
    const { price, title, qty, img } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={img} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}> {title} </div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            <img
              alt="increase"
              className="action-icons"
              onClick={this.increaseQty}
              src="https://cdn-icons.flaticon.com/png/512/1008/premium/1008978.png?token=exp=1636613211~hmac=0332940e00df1da642ea0ea14a88c90c"
            />
            <img
              alt="decrease"
              className="action-icons"
              onClick={this.decreaseQty}
              src="https://cdn-icons.flaticon.com/png/512/2920/premium/2920674.png?token=exp=1636613331~hmac=ea30ffab54473b5cf85d2788d5330dcd"
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/565/565491.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
