import PropTypes from "prop-types";
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[25%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black/90 to-transparent">
      <h1 className="text-3xl md:text-6xl font-extrabold drop-shadow-lg">
        {title}
      </h1>
      <p className="hidden md:block py-4 text-lg w-1/3 text-gray-200">
        {overview}
      </p>
      <div className="flex gap-4 mt-6">
        <button className="flex items-center gap-2 bg-white text-black py-2 md:py-3 px-4 md:px-8 text-lg md:text-xl font-semibold rounded-lg shadow-lg hover:bg-opacity-80 transition">
          <Play className="w-6 h-6" /> Play
        </button>
        <button className="hidden md:flex items-center gap-2 bg-gray-600/60 text-white py-2 px-6 text-lg md:text-xl font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition">
          <Info className="w-6 h-6" /> More Info
        </button>
      </div>
    </div>
  );
};

VideoTitle.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default VideoTitle;
