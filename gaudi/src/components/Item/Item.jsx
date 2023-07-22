import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, brand, model, price, img, stock }) => {
  return (
    <article className="CardItem flex-container">
      <header className="Header">
        <h2 className="ItemBrand">{brand}</h2>
        <h4 className="ItemModel">{model}</h4>
      </header>
      <picture>
        <img className="img-fluid" src={img} alt={model} />
      </picture>
      <section>
        <p className="info">Precio: ${price}</p>
        <p className="info info-Secondary">Stock disponible: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className="CTA">
          Ver producto
        </Link>
      </footer>
    </article>
  );
};

export default Item;
