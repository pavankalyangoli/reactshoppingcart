import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

export const Product = (props) => {
  const { data } = props;
  const { id, productName, price, productImage } = data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="product" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <p>({cartItemAmount})</p>}
      </button>
    </div>
  );
};
