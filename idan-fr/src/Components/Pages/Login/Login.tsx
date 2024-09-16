import { useState } from "react";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import urlService from "../../../Sevices/UrlService";
import notifyService from "../../../Sevices/NotificationService";
import "./Login.css"

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        axios.post(urlService.urls.login, { email, password })
            .then(response => {
                if (response.status === 200) {
                    // Getting the data and after the user login, the first position is the first name, after last name and then the user id.

                    const firstResponseData = response.data.split(',');
                    // Split the data to getting the first name.
                    const resultFirstNameData = firstResponseData[0].split(" ", 5);
                    const firstName = resultFirstNameData[resultFirstNameData.length - 1];

                    const secondResponseData = response.data.split(',');
                    // Split the data to getting the last name.
                    const resultLastNameData = secondResponseData[1].split(" ", 4);
                    const lastName = resultLastNameData[resultLastNameData.length - 1];

                    const lastResponseData = response.data.split(',');
                    // Split the data to getting the user id.
                    const resultUserIdData = lastResponseData[2].split(" ", 4);
                    const userId = resultUserIdData[resultUserIdData.length - 1];

                    // Saving the first name, last name, user id in the browser local storage to use it later.
                    localStorage.setItem("firstName", JSON.stringify(firstName));
                    localStorage.setItem("lastName", JSON.stringify(lastName));
                    localStorage.setItem("userId", JSON.stringify(userId));
                    notifyService.success(`Hello ${firstName} ${lastName}! Login successful `);
                    // Navigate to order route
                    navigate('/order');
                }
                else {
                    notifyService.error("Failed to login");
                }
            })
            .catch(error => {
                notifyService.error("Failed to login");
            });
    };

    return (
        <div className="Login">
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /> <br />
            <button className="button-44" onClick={handleLogin}>Login</button>
            <p>
                Don't have an account? <Link to="/register">Register here</Link>.
            </p>
        </div>
    );
}

export default Login;
