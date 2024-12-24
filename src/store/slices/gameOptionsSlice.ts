import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category, Level } from '@/app/lib/client';

export interface GameOptionsState {
  selectedCategory: Category | null;
  selectedLevel: Level | null;
}

const initialState: GameOptionsState = {
  selectedCategory: null,
  selectedLevel: null,
};

export const gameOptionsSlice = createSlice({
  name: 'gameOptions',
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<Category>) {
      state.selectedCategory = action.payload;
    },
    setSelectedLevel(state, action: PayloadAction<Level>) {
      state.selectedLevel = action.payload;
    },
  },
});

export const { setSelectedCategory, setSelectedLevel } = gameOptionsSlice.actions;

export default gameOptionsSlice.reducer;
