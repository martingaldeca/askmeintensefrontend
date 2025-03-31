import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category, DataService, Level } from '@/app/lib/client';

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
      DataService.dataEventCreate({
        event_type: 'category_selected',
        extra_info: action.payload,
      }).catch(error => {
        console.error('Error sending click event:', error);
      });
    },
    setSelectedLevel(state, action: PayloadAction<Level | undefined>) {
      state.selectedLevel = action.payload;
      DataService.dataEventCreate({
        event_type: 'level_selected',
        extra_info: action.payload,
      }).catch(error => {
        console.error('Error sending click event:', error);
      });
    },
  },
});

export const { setSelectedCategory, setSelectedLevel } = gameOptionsSlice.actions;
export default gameOptionsSlice.reducer;
