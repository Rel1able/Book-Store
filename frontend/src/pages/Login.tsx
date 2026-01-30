import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

export default function Login() {
    const { setToken } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleLogin(e: React.ChangeEvent<HTMLFormElement>) {
        try {
            e.preventDefault();
            const req = await fetch("http://localhost:3000/auth/login", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ email, password })
            });
            const res = await req.json();
            if (!res.ok) {
                setError(res.error);
            }
            setToken(res.token)
            localStorage.setItem("token",res.token);
            navigate("/");

        } catch (err) {
            console.error(err);
        }

    }


    return (
        <form onSubmit={handleLogin}>
            <div>
                <label htmlFor="email">Please enter your email:</label>
                <input value={email} type="email" required placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Please enter your password:</label>
                <input value={password} type="password" required placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button>Login</button>
            {error && <p>{error}</p>}
        </form>
    )
}