import "./ItemDetailContainer.css";
import { useState, useEffect, useContext } from "react";
import { getProductData } from "../../services/firebase";
import { Link, useParams } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import ItemDetail from "../ItemDetail/ItemDetail";
import { RaceBy } from "@uiball/loaders";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const { addToCart, getItemInCart } = useContext(cartContext);

  const itemInCart = getItemInCart(id);

  useEffect(() => {
    async function requestProduct() {
      const respuesta = await getProductData(id);
      setProduct(respuesta);
      setIsLoading(false);
    }

    requestProduct();
  }, [id]);

  function handleAddToCart(clickCount) {
    addToCart(product, clickCount);
    alert(`Producto agregado al carrito, cantidad: ${clickCount}`);
    setIsAddedToCart(true);
  }

  return isLoading ? (
    <RaceBy className="loader" size={80} lineWeight={5} speed={1.4} color="black" />
  ) : product.stock === 0 ? (
    <p>No hay producto en stock</p>
  ) : (
    <div className="ItemDetailContainer">
      <ItemDetail
        product={product}
        isAddedToCart={isAddedToCart}
        maxItems={itemInCart ? product.stock - itemInCart.count : product.stock}
        handleAddToCart={handleAddToCart}
        itemInCart={itemInCart}
      />
    </div>
  );
}

export default ItemDetailContainer;