import { createSlice } from '@reduxjs/toolkit';
import { Category } from '@/app/lib/client';

export interface CategoriesSlice {
  instance: Category[] | null;
}

const initialState: CategoriesSlice = {
  instance: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    fetchCategories: (state, action) => {
      state.instance = action.payload;
    },
  },
});

export const { fetchCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
