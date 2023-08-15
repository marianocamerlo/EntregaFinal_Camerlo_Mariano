import CartWidget from "../CartWidget/CartWidget";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <Link to="/" className="navbar-brand shadows">
        Zebra Shoes
      </Link>

      <div className="column">
        <NavLink
          to={"/category/Urbana"}
          className={({ isActive }) => (isActive ? "ActiveOption active-shadows" : "Option shadows")}
        >
          Urbanas
        </NavLink>
        <NavLink
          to={"/category/Deportiva"}
          className={({ isActive }) => (isActive ? "ActiveOption active-shadows" : "Option shadows")}
        >
          Deportivas
        </NavLink>
      </div>
      <CartWidget/>
    </nav>
  );
}
