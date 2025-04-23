"use client";

import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorite.slice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default store;