import { useRef } from "react";
import HomeSectionCard from "../cards/HomeSectionCard";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function CardSlider() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.8; // scroll almost one screen width
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-gray-300 py-8 flex items-center justify-center">
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="bg-white rounded-full shadow-md p-3 mx-2 hover:bg-gray-200"
      >
        <ChevronLeftIcon size={28} />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-6 px-4"
        style={{ scrollBehavior: "smooth", maxWidth: "85vw" }} // controls visible width
      >
        {[...Array(10)].map((_, i) => (
          <HomeSectionCard key={i} />
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="bg-white rounded-full shadow-md p-3 mx-2 hover:bg-gray-200"
      >
        <ChevronRightIcon size={28} />
      </button>
    </div>
  );
}