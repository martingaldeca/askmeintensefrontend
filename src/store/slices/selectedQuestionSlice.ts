import { createSlice } from '@reduxjs/toolkit';
import { Question } from '@/app/lib/client';

export interface SelectedQuestionSlice {
  instance: Question | null;
}

const initialState: SelectedQuestionSlice = {
  instance: null,
};

export const selectedQuestionSlice = createSlice({
  name: 'selectedQuestion',
  initialState,
  reducers: {
    fetchSelectedQuestion: (state, action) => {
      state.instance = action.payload;
    },
  },
});

export const { fetchSelectedQuestion } = selectedQuestionSlice.actions;
export default selectedQuestionSlice.reducer;
