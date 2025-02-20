import openai from "../utils/openai";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/language";
import { API_OPTIONS } from "../constants";
import { addGptMovieResult } from "../hooks/gpt-slice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    if (!searchText.current.value) return;

    const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query: ${searchText.current.value}. Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-4-turbo",
    });

    if (!gptResults.choices) return;

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // Fetch TMDB results for each movie
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-20 md:pt-32 flex justify-center w-full px-4">
      <form
        className="w-full max-w-lg bg-black bg-opacity-80 shadow-lg rounded-lg flex flex-col md:flex-row items-center p-4 gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="w-full md:flex-1 p-3 text-white bg-gray-900 rounded-md outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="w-full md:w-auto py-3 px-6 bg-red-700 text-white font-semibold rounded-md hover:bg-red-800 transition-all duration-300"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
