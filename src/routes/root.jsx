import {Link, Outlet} from "react-router-dom";

export default function Root() {
    return (
        <>
            <header className={"header"}>
                <ul className={"menu"}>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/contacts"}>Contact</Link>
                    </li>
                </ul>
            </header>
            <div><Outlet/></div>
        </>
    );
}