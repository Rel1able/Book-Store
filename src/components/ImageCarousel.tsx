import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


type ImageCarouselProps = {
    images: string[];
    currentIndex: number;
    prevImage: () => void;
    nextImage: () => void;
    setIndex: (index: number) => void;

}

export default function ImageCarousel({ images, currentIndex, prevImage, nextImage, setIndex }: ImageCarouselProps) {
    return (
        <div className="relative rounded-3xl w-full h-192 overflow-hidden">
            <img src={images[currentIndex]} className="w-full object-cover h-full" />
            <div className="absolute top-[50%] z-10 flex justify-between w-full items-center">
                <button className=" text-white rounded-xl cursor-pointer" onClick={prevImage}><MdKeyboardArrowLeft size={64} /></button>
                <button className=" text-white rounded-xl cursor-pointer" onClick={nextImage}><MdKeyboardArrowRight size={64} /></button>
            </div>
            {images.length > 1 && (
                <ul className="flex justify-center items-center gap-2 absolute bottom-[10%] left-[45%]">
                    {images.map((_, index: number) => (
                        <button onClick={() => setIndex(index)} className={`w-3 h-3 rounded-full transition-all cursor-pointer ${index === currentIndex ? "bg-blue-500 scale-110" : "bg-gray-400 opacity-50 hover:opacity-80"}`}></button>
                    ))}
                </ul>
            )}

        </div>

    )
}