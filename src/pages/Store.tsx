import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

import { RAWG_BASE_URL, RAWG_API_KEY } from "../config/api";

export default function Store() {

    const [games, setGames] = useState([]);

    const url = `${RAWG_BASE_URL}/games?key=${RAWG_API_KEY}`;
    useEffect(() => {
        async function getGames() {
            const res = await fetch(url);
            const data = await res.json();
            setGames(data.results);
            console.log(data.results);
        }
        getGames();
    }, [])

    return (
        <div className="flex flex-col gap-8 p-8">
            <h1 className="text-center font-bold text-2xl dark:text-white">Featured Games</h1>
            <ul className="grid w-full grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8">
                {games.map((game) => (

                    <ProductCard name={game.name} bgImage={game.background_image} rating={game.rating} id={game.id}/>


                ))}
            </ul>
        </div>
    )
}