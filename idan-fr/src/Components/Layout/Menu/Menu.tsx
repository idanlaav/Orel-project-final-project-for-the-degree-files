import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    
    return (
        <div className="Menu">
            <Link to={"home"}>Home 🏡</Link>
            <Link to={"about"}>About</Link>
            <Link to={"map"}>Map</Link>
            <Link to={"developer"}>Developer</Link>
        </div>
    );
}

export default Menu;
