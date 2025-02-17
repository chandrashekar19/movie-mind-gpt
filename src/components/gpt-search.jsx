import { BG_URL } from "../constants";
import GptMovieSuggestions from "./gpt-movie-suggestions";
import GptSearchBar from "./gpt-searchbar";

const GPTSearch = () => {
  return (
    <>
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          className="w-full h-full object-cover opacity-80 transition-opacity duration-500"
          src={BG_URL}
          alt="Background"
        />
      </div>

      {/* Search Bar and Suggestions */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
