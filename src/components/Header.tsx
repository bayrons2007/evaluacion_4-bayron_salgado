import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar" aria-label="Navegación principal">
        <Link to="/" className="logo">
          BS.
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink to="/proyectos">
              Proyectos
            </NavLink>
          </li>

          <li>
            <NavLink to="/sobre-mi">
              Sobre mí
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;