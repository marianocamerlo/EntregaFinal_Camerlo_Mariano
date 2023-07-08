import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom-dark">
      
        <div className="container-fluid">
          <div className="navbar-brand">
            <h3 className="text-bg-dark">Gaudi Shoes</h3>
          </div>
          <div className="column">
            <button type="button" className="btn btn-sm btn-dark">
              Zapatillas Mujer
            </button>
            <button type="button" className="btn btn-sm btn-dark">
              Zapatillas Hombre
            </button>
            <button type="button" className="btn btn-sm btn-dark">
              Preguntas Frecuentes
            </button>
          </div>
          <CartWidget className="column" />
        </div>
      
    </nav>
  );
};

export default NavBar;
