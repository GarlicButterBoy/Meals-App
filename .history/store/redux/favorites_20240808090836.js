import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
      addFavorite: (state) => {
          state.ids.push(),
    },
    removeFavorite: (state) => {},
  },
});
