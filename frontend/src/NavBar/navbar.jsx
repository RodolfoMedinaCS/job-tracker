import {Link} from "react-router-dom";


function NavBar() {

    return (
        <nav className="nav">
            <Link to={"/dashboard"} className="logo">Logo</Link>
            <ul className="ul">
                <li>
                    <Link to={"/add-application"}>Add Application</Link>
                </li>
                <li>
                    <Link to={"/account"}>Account</Link>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar