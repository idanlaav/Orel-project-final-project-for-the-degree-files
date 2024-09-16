import { useState } from "react";
import "./ToggleTheme.css";
import { Theme } from "../../../Models/Theme";
import store from "../../../Redux/Store";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../Redux/ThemeAppState";

function ToggleTheme(): JSX.Element {
    const dispatch = useDispatch();
    const [theme, setTheme] = useState<Theme>(store.getState().themeReducer.theme);

    const changeTheme =() => {
        if (theme === 'light-mode') {
            setTheme('dark-mode');
            dispatch(toggleTheme('dark-mode'));
          } else {
            setTheme('light-mode');
            dispatch(toggleTheme('light-mode'));
          }
    }
    return (
        <div className="ToggleTheme">
			    <button className="button-44" onClick={changeTheme}>{(theme===`light-mode`?'Go Dark':'Go Light')}</button>
        </div>
    );
}

export default ToggleTheme;
