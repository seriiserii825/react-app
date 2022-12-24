import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <nav className="header">
        <div className="nav-wrapper">
          <ul className="left hide-on-med-and-down menu">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/hooks"}>Hooks</NavLink>
            </li>
            <li>
              <NavLink to={"/todos"}>Todos</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main">
        <Outlet />
      </div>
      <footer class="page-footer">
        <div class="footer-copyright">
          <div class="container">
            © 2022 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
