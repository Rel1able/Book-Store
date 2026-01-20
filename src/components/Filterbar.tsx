
import type { ChangeEvent, FormEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";
type FilterbarProps = {
    inputValue: string;
    setInputValue: (value: string) => void;
}

export default function Filterbar({inputValue, setInputValue}: FilterbarProps){

    function handleInput(e: ChangeEvent<HTMLInputElement>){
        let lowerCase = e.target.value.toLowerCase();
        setInputValue(lowerCase);
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        setInputValue(inputValue);
    }
    return (
        <form className="bg-gray-200 p-2 rounded-2xl dark:bg-gray-800 dark:text-white relative" onSubmit={handleSubmit}>
            <AiOutlineSearch className="absolute right-2 top-3" size={20}/>
            <input className="focus:outline-0" type="text" value={inputValue} placeholder="Search games..." onChange={handleInput}/>
        </form>
    )
}