import useNowPlayingMovies from "../hooks/use-playing-movies";
import MainContainer from "./main-container";
import SecondaryContainer from "./secondary-container";
import usePopularMovies from "../hooks/use-popular-movies";
import GptSearch from "./gpt-search";
import { useSelector } from "react-redux";
import Header from "./header";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
