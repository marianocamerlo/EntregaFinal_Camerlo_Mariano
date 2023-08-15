import "./Item.css";
import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function Item(props) {
  const { id, brand, model, img, price } = props;
  return (
    <div class="product-card">
      <div class="card-header">
        <img src={img} alt={brand + " " + model} />
      </div>
      <div class="card-body">
        <h4 class="product-title">{brand}</h4>
        <p class="product-status">{model}</p>
        <h3 class="product-price">Precio: ${price}</h3>
      </div>
      <div class="card-footer">
        <Link to={`/product/${id}`}>
          <ButtonComponent colorText="#f0f0f0" colorBg="#202020">
            Ver producto
          </ButtonComponent>
        </Link>
      </div>
    </div>
  );
}

export default Item;
