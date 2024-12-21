import { createSlice } from '@reduxjs/toolkit';
import { Me } from '@/app/lib/client';

// Define a type for the slice state
export interface ProfileState {
  instance: Me | null;
}

// Define the initial state using that type
const initialState: ProfileState = {
  instance: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fetchProfile: (state, action) => {
      state.instance = action.payload;
    },
  },
});

export const { fetchProfile } = profileSlice.actions;
export default profileSlice.reducer;
