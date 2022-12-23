import {NavLink, Outlet} from "react-router-dom";

export default function Root() {
    return (
        <>
            <header className={"header"}>
                <ul className={"menu"}>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/hooks"}>Hooks</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contacts"}>Contact</NavLink>
                    </li>
                </ul>
            </header>
            <div><Outlet/></div>
        </>
    );
}