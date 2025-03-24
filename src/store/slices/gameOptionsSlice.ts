import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Category, Level } from '@/app/lib/client';

interface GameOptionsState {
  selectedCategory?: Category;
  selectedLevel?: Level;
}

const initialState: GameOptionsState = {
  selectedCategory: undefined,
  selectedLevel: undefined,
};

export const gameOptionsSlice = createSlice({
  name: 'gameOptions',
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<Category | undefined>) {
      state.selectedCategory = action.payload;
    },
    setSelectedLevel(state, action: PayloadAction<Level | undefined>) {
      state.selectedLevel = action.payload;
    },
  },
});

export const { setSelectedCategory, setSelectedLevel } = gameOptionsSlice.actions;
export default gameOptionsSlice.reducer;
