import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import authReducer from '../features/authSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
  // Ajout de Redux DevTools
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
