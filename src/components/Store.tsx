import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import { RAWG_BASE_URL, RAWG_API_KEY } from "../config/api";
import Dropdown from "./Dropdown";
import { Loadingbar } from "./Loadingbar";


type Game = {
    name: string
    background_image: string
    rating: number
    id: number
}

type StoreProps = {
    queryString: string;
    title: string;
    homepage: boolean;
}
export default function Store({ queryString, title }: StoreProps) {
    const [orderingValue, setOrderingValue] = useState("-added");
    const [games, setGames] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const pageNumbers = [];
    for (let i = 1; i <= 10; i++) {
        pageNumbers.push(i);
    }

    function paginate(number: number) {
        setCurrentPage(number);
    }



    const options = [
        { name: "Popularity", value: "-added" },
        { name: "Release date", value: "-released" },
        { name: "Rating", value: "-rating" }]

    useEffect(() => {
        setCurrentPage(1);
    }, [orderingValue, search])

    useEffect(() => {
        async function getGames() {
            setGames([])
            const url = `${RAWG_BASE_URL}/games?key=${RAWG_API_KEY}${queryString}&ordering=${orderingValue}&page=${currentPage}&search=${search}`
            const res = await fetch(url);
            const data = await res.json();
            setGames(data.results);
            console.log(data.results);
        }
        getGames();
    }, [search, queryString, orderingValue, currentPage])





    return games.length > 0 ? (
        <div className="flex flex-col gap-8 p-8 justify-center items-center">
            <Searchbar setSearch={setSearch} />
            <h1 className="text-center w-full font-bold text-4xl dark:text-white">{title}</h1>
            <div className="relative w-full mb-2 bottom-6">
                <Dropdown options={options} orderingValue={orderingValue} setOrderingValue={setOrderingValue} />
            </div>
            <ul className="grid w-full grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8">
                {games.map((game: Game) => (
                    <ProductCard name={game.name} bgImage={game.background_image} rating={game.rating} id={game.id} />
                ))}
            </ul>
            <ul className="flex gap-2 justify-center mt-8">
                {pageNumbers.map((number) => (

                    <li>
                        <button className={`px-3 w-full py-1 rounded-full cursor-pointer font-bold hover:bg-blue-500 dark:text-white  ${currentPage === number ? `bg-blue-500` : `bg-gray-200 dark:bg-gray-800`}`} onClick={() => paginate(number)}>{number}</button>
                    </li>


                ))}
            </ul>
        </div>
    ) : <div className="w-full h-full flex justify-center items-center">
        <Loadingbar />
    </div>
}