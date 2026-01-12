import {useState} from "react";
import type { FormEvent } from "react";


type SearchbarProps = {
    setSearch: (value: string) => void
}

export default function Searchbar({setSearch}: SearchbarProps){

    const [value, setValue] = useState("");

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        setSearch(value);
    }
    return (
        <form className="bg-gray-200 p-2 rounded-2xl dark:bg-gray-800 dark:text-white" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" onChange={(e) => setValue(e.target.value)}/>
        </form>
    )
}