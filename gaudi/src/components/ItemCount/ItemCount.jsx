import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container text-center">
      <div className="row align-items-center mx-auto">
        <button className="col btn btn-outline-danger" onClick={decrement}>
            -
        </button>
        <h4 className="col px-3">{quantity}</h4>
        <button className="col btn btn-outline-primary" onClick={increment}>+
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
