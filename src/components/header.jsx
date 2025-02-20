import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../hooks/user-slice";
import { toggleGptSearchView } from "../hooks/gpt-slice";
import { changeLanguage } from "../hooks/config-slice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-8 py-3 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center">
      {/* Logo */}
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="Netflix Logo" />

      {user && (
        <div className="flex items-center gap-4 p-2 w-full md:w-auto">
          {/* Language Selection (Only in GPT Search Mode) */}
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* GPT Search/Homepage Toggle */}
          <button
            className="py-2 px-6 bg-purple-800 text-white rounded-md hover:bg-purple-700 transition-all duration-300"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>

          {/* Profile & Sign Out (Wrapped in One Clickable Button) */}
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-white font-semibold hover:text-gray-400 transition-all duration-300"
          >
            <img
              className="w-8 h-8 md:w-10 md:h-10 border-2 rounded-full border-gray-400"
              alt="User Icon"
              src={user?.photoURL}
            />
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
