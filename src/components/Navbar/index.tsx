import { Link } from "react-router-dom";
import { Nav } from "./styles";

export function Navbar(){
    return(
        <Nav>
            <div className="logo">
                <strong>ValoApi</strong>
                <p>Created with <a href="https://valorant-api.com/" target="_blank" rel="noreferrer">Valorant-api</a></p>
            </div>
            <ul className="navbar-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Agents">Agents</Link></li>
                <li><Link to="/Maps">Maps</Link></li>
            </ul>
        </Nav>
    )
}