import { Link } from "react-router-dom";
import { Nav } from "./styles";

export function Navbar(){
    return(
        <Nav>
            <div className="logo">
                <strong><Link to="/">Museu valorant</Link></strong>
                <p>Criado com <a href="https://valorant-api.com/" target="_blank" rel="noreferrer">Valorant-api</a></p>
            </div>
            <ul className="navbar-items">
                <li><Link to="/agents">Agentes</Link></li>
                <li><Link to="/maps">Mapas</Link></li>
            </ul>
        </Nav>
    )
}