import { createSlice } from "@reduxjs/toolkit";
import { Level } from "@/app/lib/client";

export interface LevelsSlice {
  instance: Level[] | null;
}

const initialState: LevelsSlice = {
  instance: null,
}

export const levelsSlice = createSlice({
  name: 'levels',
  initialState,
  reducers: {
    fetchLevels: (state, action) => {
      state.instance = action.payload;
    },
  }
});

export const { fetchLevels } = levelsSlice.actions;
export default levelsSlice.reducer;
