import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth.slice';
import userReducer from './user.slice';
import RevueReducer from './revue.slice';

export const store = configureStore ({
  reducer: {
    auth: authReducer,
    user: userReducer,
    villes: RevueReducer,
  },
  devTools: true,
});
