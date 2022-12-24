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
              <NavLink to={"/counter"}>Counter</NavLink>
            </li>
            <li>
              <NavLink to={"/reducer"}>Use Reducer</NavLink>
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
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
            © 2022 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
