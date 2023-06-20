import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { getProductData } from "./productStore";
import { Button } from "react-bootstrap";

const CartProduct = ({ product }) => {
  const cart = useContext(CartContext);
  const { id, quantity } = product;
  const productData = getProductData(id);
  return (
    <>
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>${(quantity * productData.price).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Remove
      </Button>
      <hr />
    </>
  );
};

export default CartProduct;
