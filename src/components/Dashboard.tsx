import { Link } from "react-router"

export default function Dashboard() {

    const listItems = [{name: "Store", link: "/store"},
        {name: "Favorite", link: "/favorite"},
        {name: "Discover", link: "/discover"},
        {name: "Wishlist", link: "/wishlist"}]
    return (
        <div className="text-gray-300 h-full">

                <h1 className="text-2xl m-4 font-bold">Resembio</h1>
                <ul>
                    {listItems.map((item) => (
                        <li className="m-4"><Link to={item.link}>{item.name}</Link></li>
                    ))}
                </ul>

        </div>
    )
}