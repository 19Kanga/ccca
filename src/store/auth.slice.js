import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/authService';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'));


const initialState = {
  user: user ? user : null,
  token: token ? token : null,
  // userss: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  // mess= mes ? mes : '',
};

// Register user
// export const register = createAsyncThunk (
//   'auth/register',
//   async (user, thunkAPI) => {
//     try {
//       return await authService.register (user);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString ();
//       return thunkAPI.rejectWithValue (message);
//     }
//   }
// );

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const rep = await authService.login(user);
      return rep;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
      // console.log (error);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: state => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: builder => {
    builder
      // .addCase (register.pending, state => {
      //   state.isLoading = true;
      // })
      // .addCase (register.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.userss.unshift (action.payload);
      // })
      // .addCase (register.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.message = action.payload;
      //   // state.users = null;
      // })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = action.payload.token;
        state.user = action.payload.result;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.token = null;
        // state.user = null;
      })
      .addCase(logout.fulfilled, state => {
        state.user = null;
        state.token = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
