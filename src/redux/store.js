import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './slices/rootReducer';

export const store = configureStore({
  reducer: RootReducer,
});

export default store;
