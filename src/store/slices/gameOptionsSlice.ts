import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GameOptionsState {
  selectedCategory: string | null;
  selectedLevel: string | null;
}

const initialState: GameOptionsState = {
  selectedCategory: null,
  selectedLevel: null,
};

export const gameOptionsSlice = createSlice({
  name: "gameOptions",
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
    setSelectedLevel(state, action: PayloadAction<string>) {
      state.selectedLevel = action.payload;
    },
  },
});

export const { setSelectedCategory, setSelectedLevel } = gameOptionsSlice.actions;

export default gameOptionsSlice.reducer;
