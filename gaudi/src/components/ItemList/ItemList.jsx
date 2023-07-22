import "./ItemList.css";
import Item from "../Item/Item";
import "bootstrap/dist/css/bootstrap.css";

const ItemList = ({ products }) => {
  return (
    
      <div className="itemList">
        {products?.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    
  );
};

export default ItemList;
