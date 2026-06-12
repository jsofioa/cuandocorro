import { Link } from "react-router-dom";
import logo from "../../assets/favicon-32x32.png";
import "./Header.css";
import { Nav } from "../Nav/Nav";

export const Header = () => {
    return (<header>
        <div className="logo-container">
            <Link to={"/"}>
                <img src={logo}/>  
            </Link>
            <Link to={"/"}>
                <p>Cuando Corro</p>
            </Link>
        </div>
        <Nav />
    </header>
    );
};