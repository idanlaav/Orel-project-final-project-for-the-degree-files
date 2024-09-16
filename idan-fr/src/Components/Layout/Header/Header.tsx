import "./Header.css";
import ToggleTheme from "../../Shared/ToggleTheme/ToggleTheme";

function Header(): JSX.Element {


    return (
        <div className="Header">
         <h1> Legend Cinema	</h1>
		 <div className="ToRight"><ToggleTheme/></div>
        </div>
    );
}

export default Header;
