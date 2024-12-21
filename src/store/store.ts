import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { profileSlice } from '@/store/slices/profileSlice';

const rootReducer = combineReducers({
  [profileSlice.name]: profileSlice.reducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
