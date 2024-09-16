import { Route, Routes } from "react-router-dom";
import App from "../../../App";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Page404 from "../../Pages/Page404/Page404";
import Register from "../../Pages/Register/Register";
import Map from "../../Map/Map";
import Developer from "../../Pages/Developer/Developer";
import Login from "../../Pages/Login/Login";
import Order from "../../Pages/Order/Order";
import "./Routing.css"

function Routing(): JSX.Element {
    // If the route is different from order we remove the First name from the local storage and then the user will login again and it not displaying an hello message.
    if(window.location.href !== "http://localhost:3000/order"){
        localStorage.removeItem("firstName");
    }


    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<App/>}/>
                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="order" element={<Order/>}/>
                <Route path="map" element={<Map/>}/>
                <Route path="developer" element={<Developer />}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );

                
}

export default Routing;
