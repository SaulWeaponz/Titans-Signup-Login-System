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
                        <Link  className="Listlink" to="/SignUp">Register</Link>
                    </li>
                    <li  className="listitem">
                        <Link className="Listlink" to="/Login">Login</Link>
                    </li>
                    <li  className="listitem">
                        <Link className="Listlink" to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}
export default NavBar;