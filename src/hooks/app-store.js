import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import moviesReducer from "./movies-slice";
import gptReducer from "./gpt-slice";
import configReducer from "./config-slice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
