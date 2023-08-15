import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firebase";
import { Link, useNavigate } from "react-router-dom";

function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.count; 
    });
    return total;
  };

  return (
    <div>
      <h1>Carrito</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Precio unitario: ${item.price}</p>
          <p>Cantidad a comprar: {item.count}</p>
          <p>Precio total: ${item.count * item.price}</p>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      <br />
      <div>Total de la compra: ${calculateTotal()}</div>{" "}
      {/* Mostrar el total calculado */}
      <Link to="/checkout">Comprar</Link>
    </div>
  );
}

export default CartContainer;
