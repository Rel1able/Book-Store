import { useState, useEffect } from "react";

export default function Home() {

    const [games, setGames] = useState([]);


    const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

    const url = `https://api.rawg.io/api/games?key=${API_KEY}`;
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
            <ul className="grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
                {games.map((game) => (
                    <li className="relative h-64 w-full bg-cover bg-center rounded-lg flex flex-col justify-end items-center" style={{backgroundImage: `url(${game.background_image})`}}>
                        <div className="absolute bottom-0 w-full h-15 backdrop-blur-md bg-black/40" />
                        <div className="text-white p-2 w-full text-center absolute  z-10">
                            <p className="">{game.name}</p>
                            <p className="text-sm dark:text-white">⭐{game.rating}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}