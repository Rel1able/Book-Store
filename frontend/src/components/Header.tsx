import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Header(){

    const {token} = useContext(AuthContext);


    return (
        
            token ? <header className="w-full flex justify-center items-center font-bold text-2xl">Welcome Back</header> : <header className="w-full flex justify-center items-center font-bold text-2xl">Please log in</header>
       
        
    )
}