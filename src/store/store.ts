import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { profileSlice } from '@/store/slices/profileSlice';
import { categoriesSlice } from "@/store/slices/categoriesSlice";
import { levelsSlice } from "@/store/slices/levelsSlice";
import { gameOptionsSlice } from "@/store/slices/gameOptionsSlice";
import { selectedQuestionSlice } from "@/store/slices/selectedQuestionSlice";

const rootReducer = combineReducers({
  [profileSlice.name]: profileSlice.reducer,
  [categoriesSlice.name]: categoriesSlice.reducer,
  [levelsSlice.name]: levelsSlice.reducer,
  [gameOptionsSlice.name]: gameOptionsSlice.reducer,
  [selectedQuestionSlice.name]: selectedQuestionSlice.reducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
