export default function ProductCard({name = "Book Name", description = "book description", price = 88, image}){
    return (
        <div className="rounded-2xl bg-white p-4 justify-center items-center m-4">   
            <div className="bg-blue-300 w-full h-24">
                <img src={image} alt="book cover"/> 
            </div>
            <h1 className="font-bold text-2xl">{name}</h1>
            <p className="text-gray-600">{description}</p>
            <div className="flex gap-4 justify-between">
                <div>
                    <h4 className="text-xl text-gray-700 font-bold">PRICE</h4>
                    <div className="font-bold text-2xl">${price}</div>
                </div>
                <button className="rounded-2xl px-2 py-4 bg-blue-500 text-white font-bold">Add to cart</button>
            </div>
        </div>
    )
}