import { useState } from "react";
import { useNavigate } from "react-router";

export default function Register() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSignUp(e: React.ChangeEvent<HTMLFormElement>) {
        try {
            e.preventDefault();
            if (password !== confPassword){
                setError("Passwords dont match. Please try again.");
                return
            }
            const req = await fetch("http://localhost:3000/auth/register", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ email, password })
            });
            const res = await req.json();
            if (res.error){
                setError(res.error);
            }
            navigate("/login");

        } catch (err) {
            console.error(err);
        }

    }


    return (
        <form onSubmit={handleSignUp}>
            <div>
                <label htmlFor="email">Please enter your email:</label>
                <input value={email} type="email" required placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Please enter your password:</label>
                <input value={password} type="password" required placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Please confirm your password:</label>
                <input value={confPassword} type="password" required placeholder="password" onChange={(e) => setConfPassword(e.target.value)} />
            </div>
            <button>Sign Up</button>
            {error && <p>{error}</p>}
        </form>
    )
}