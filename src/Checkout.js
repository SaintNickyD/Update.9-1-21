import React from "react";
import "./Checkout.css";


function Checkout() {

  return (
    <div className="checkout">
      <div className="checkout__left">
          <img
          className="checkout__ad"
          src="https://r76.cooltext.com/rendered/cooltext392036575863267.png" />
          <h3>Hello, User</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

      </div>

      <div className="checkout__right">
        <h1>SubTotal</h1>
      </div>
      </div>
  );
}

export default Checkout;
