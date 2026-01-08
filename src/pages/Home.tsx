import BooksImage from "../assets/enrico-bet-lc7xcWebECc-unsplash.jpg"


import { Link } from "react-router"
export default function Home() {
    return (
        <div className="h-screen mt-16">
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-4xl font-bold dark:text-white ">Open A Book,</h1>
                <h1 className="text-4xl text-blue-500 font-bold">Open Your mind</h1>
                <p className="dark:text-blue-500">Your next favorite book is just a page away.</p>
                <img className="w-48 rounded-2xl" src={BooksImage} alt="Book image"/>
                <button className="text-white rounded-2xl px-4 py-2 bg-blue-500 "><Link to="/store">Go to store</Link></button>
         
                
               
            </div>
        </div>
    )
}