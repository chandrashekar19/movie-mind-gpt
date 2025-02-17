import { IMG_CDN_URL } from "../constants";
import PropTypes from "prop-types";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 pr-4 transition-transform duration-300 hover:scale-105">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

MovieCard.propTypes = {
  posterPath: PropTypes.string,
};

export default MovieCard;
