import React, { Component } from "react";

const CartItem = (props) => {
  //   Object Destructuring
  const { price, title, qty, img } = props.product;
  const { product, onDecreaseQty, onIncreaseQty, onDeleteProduct } = props;
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
            onClick={() => onIncreaseQty(product)}
            src="https://cdn-icons.flaticon.com/png/512/1008/premium/1008978.png?token=exp=1636613211~hmac=0332940e00df1da642ea0ea14a88c90c"
          />
          <img
            alt="decrease"
            className="action-icons"
            onClick={() => onDecreaseQty(product)}
            src="https://cdn-icons.flaticon.com/png/512/2920/premium/2920674.png?token=exp=1636613331~hmac=ea30ffab54473b5cf85d2788d5330dcd"
          />
          <img
            alt="delete"
            className="action-icons"
            onClick={() => onDeleteProduct(product.id)}
            src="https://cdn-icons-png.flaticon.com/512/565/565491.png"
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
