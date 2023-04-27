import React, { useContext } from "react";
import { PRODUCTS } from "../products";
import { ShopContext } from "../context/shop-context";
import { CartItem } from "./cart-Item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((eachProduct) => {
          if (cartItems[eachProduct.id] !== 0) {
            return <CartItem data={eachProduct} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Contibue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <p className="description">Yout Cart is Empty</p>
      )}
    </div>
  );
};
