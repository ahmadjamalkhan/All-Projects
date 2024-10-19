import React, { useContext } from "react";
import { StoreContext } from "../../context/ContextStore";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
function Cart() {
  const navigate=useNavigate()
  const { food_list, cartItems, removeFromCart,subTotalAmmount } = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div
                  key={Date.now()}
                  className="cart-item-title cart-items-item"
                >
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className=" cart-item-remove"
                  >
                    x
                  </p>
                </div>
                <hr />
              </>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
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
              <p>{subTotalAmmount()>0?2:0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{subTotalAmmount()>0?subTotalAmmount()+2:0}</b>
            </div>
          </div>
          <button className="checkout-button" onClick={()=>{navigate("/order")}}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here:</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo code" />
              <button className="submit-button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
