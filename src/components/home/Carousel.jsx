import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "https://picsum.photos/id/1018/1600/900/",
    "https://picsum.photos/id/1025/1600/900/",
    "https://picsum.photos/id/1033/1600/900/",
    "https://picsum.photos/id/1041/1600/900/",
    "https://picsum.photos/id/1050/1600/900/",
];

const Carousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setIndex((prev) => (prev + 1) % images.length),
            5000 //
        );
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="relative w-full h-[50vh] overflow-hidden rounded-none">
            <AnimatePresence>
                <motion.img
                    key={index}
                    src={images[index]}
                    alt={`Slide ${index}`}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>
        </div>
    )
}

export default Carousel

