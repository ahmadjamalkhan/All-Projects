import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/ContextStore";
function PlaceOrder() {
  const {subTotalAmmount}=useContext(StoreContext)
  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className="title">Delevery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
      </div>
      <div className="place-order-right">
        {" "}
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details-container">
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{subTotalAmmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{subTotalAmmount() > 0 ? 2 : 0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{subTotalAmmount() > 0 ? subTotalAmmount() + 2 : 0}</b>
            </div>
          </div>
          <button
            className="checkout-button payment"
           
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
