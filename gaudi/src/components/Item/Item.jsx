import "./Item.css";

const Item = ({ id, brand, model, price, img, stock }) => {
  
    return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemBrand">{brand}</h2>
        <span className="ItemModel">{model}</span>
      </header>
      <picture>
        <img src={img} alt={model} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio: ${price}</p>
        <p className="info">Stock disponible: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <link to={`/item/${id}`} className="CTA">Ver producto</link>
      </footer>
    </article>
  );
}

export default Item