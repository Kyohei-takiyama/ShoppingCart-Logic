import React, { useContext, useState } from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";

import { CartContext } from "../CartContext";
import CartProduct from "../CartProduct";

const NavbarComponent = () => {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const productsConunt = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Eccomerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart ({productsConunt} Items)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsConunt > 0 ? (
            <>
              <p>Items in your cart :</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct product={currentProduct} key={idx} />
              ))}

              <h1>Total : {cart.getTotalCost().toFixed(2)}</h1>
              <Button variant="success">Purchase items!</Button>
            </>
          ) : (
            <h1>There are no items in your Cart</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarComponent;
