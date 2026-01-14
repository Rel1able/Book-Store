import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


export default function ImageCarousel({ images, currentIndex, prevImage, nextImage, setIndex }) {
    return (
        <div className="relative rounded-3xl w-full h-192 overflow-hidden">
            <img src={images[currentIndex]} className="w-full object-cover h-full" />
            <div className="absolute top-[50%] z-10 flex justify-between w-full items-center">
                <button className=" text-white rounded-xl cursor-pointer" onClick={prevImage}><MdKeyboardArrowLeft size={64} /></button>
                <button className=" text-white rounded-xl cursor-pointer" onClick={nextImage}><MdKeyboardArrowRight size={64} /></button>
            </div>
            <ul className="flex justify-center items-center gap-2 absolute bottom-[10%] left-[45%]">
                {images.map((_, index) => (
                    <button onClick={() => setIndex(index)} className={`w-3 h-3 rounded-full transition-all cursor-pointer ${index === currentIndex ? "bg-blue-500 scale-110" : "bg-gray-400 opacity-50 hover:opacity-80"}`}></button>
                ))}
            </ul>
        </div>

    )
}