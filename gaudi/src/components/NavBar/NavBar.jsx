import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom-dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/">Gaudi Shoes</Link>
        </div>
        <div className="column">
          <NavLink
            to={`/category/urbanas`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Urbanas
          </NavLink>
          <NavLink
            to={`/category/deportivas`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Deportivas
          </NavLink>
          <NavLink
            to={`/category/faq`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Preguntas Frecuentes
          </NavLink>
        </div>
        <CartWidget className="column" />
      </div>
    </nav>
  );
};

export default NavBar;
