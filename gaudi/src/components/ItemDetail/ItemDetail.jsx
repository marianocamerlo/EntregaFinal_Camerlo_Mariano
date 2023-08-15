import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";

const ItemDetail = (props) => {
  const { product, isAddedToCart, maxItems, handleAddToCart, itemInCart } =
    props;
  const [showSecondItemCount, setShowSecondItemCount] = useState(false);

  return (
    <div class="detail-card">
      <div class="detail-header">
        <img src={product.img} alt={product.brand + " "} />
      </div>
      <div class="card-body">
        <h4 class="detail-title">{product.brand}</h4>
        <p class="detail-status">{product.model}</p>
        <h3 class="detail-price">Precio: ${product.price}</h3>
        <small class="detail-description">{product.description}</small>
      </div>
      {product.stock > 0 ? (
        isAddedToCart ? (
          <div className="detail-footer">
            <Link to={"/cart"}>
              <ButtonComponent coloText="#f0f0f0" colorBg="#F0F230">
                Ver carrito
              </ButtonComponent>
            </Link>
          </div>
        ) : (
          <ItemCount stock={maxItems} onConfirm={handleAddToCart} />
        )
      ) : (
        <div className="detail-footer">
          <p>No hay stock disponible</p>
        </div>
      )}
      {itemInCart && (
        <h2 className="detail-footer">
          Tenés {itemInCart.count} unidades de este producto en el carrito
        </h2>
      )}
      {showSecondItemCount && (
        <ItemCount stock={maxItems} onConfirm={handleAddToCart} />
      )}

      <Link to="/">
        <ButtonComponent colorText="#f0f0f0" colorBg="#202020">
          Volver al inicio
        </ButtonComponent>
      </Link>
    </div>
  );
};

export default ItemDetail;
