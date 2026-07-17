import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {

        try {

            const response = await api.post("/login", {
                username,
                password
            });

            if (response.data === "Login Successful") {

                alert("Login Successful");

                navigate("/dashboard");

            } else {

                alert("Invalid Credentials");

            }

        } catch (error) {

            alert("Server Error");

            console.log(error);

        }

    };

    return (

        <div className="login">

            <h2>AssetPulse Login</h2>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={login}>
                Login
            </button>
            

        </div>

    );

}

export default Login;