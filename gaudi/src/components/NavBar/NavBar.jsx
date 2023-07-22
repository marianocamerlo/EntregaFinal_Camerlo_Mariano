import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="navbar-brand">
        Zebra Shoes
      </Link>

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
    </nav>
  );
};

export default NavBar;
