import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/use-movie-trailer";
import PropTypes from "prop-types";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen relative rounded-lg shadow-lg">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&rel=0&controls=0&showinfo=0&modestbranding=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

VideoBackground.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default VideoBackground;
