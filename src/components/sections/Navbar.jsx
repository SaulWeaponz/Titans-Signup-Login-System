import {Link} from "react-router-dom";
function NavBar(){
    return(
        <header className="NavBar">
            <h1>TITANS-FC</h1>
            <nav >
                <ul className="Nav">
                    <li className="listitem">
                        <Link   className="Listlink" to="/">Home</Link>
                    </li>
                    <li  className="listitem">
                        <Link  className="Listlink" to="/Login">Register</Link>
                    </li>
                    <li  className="listitem">
                        <Link className="Listlink" to="/SignUp">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}
export default NavBar;