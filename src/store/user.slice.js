import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import userService from '../services/userService';
import authService from '../services/authService';

const initialState = {
  users: [],
  usersId: [],
  usersEntrep: [],
  userRole: [],
  isError: false,
  isSuccess: false,
  isRole: false,
  isLoading: false,
  message: '',
};

export const register = createAsyncThunk (
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register (user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString ();
      return thunkAPI.rejectWithValue (message);
    }
  }
);

// Create new user
export const createUserRole = createAsyncThunk (
  'usersRole/create',
  async (userData, thunkAPI) => {
    try {
      const token = thunkAPI.getState ().auth.user.token;
      return await userService.postUserHasRole (userData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString ();
      return thunkAPI.rejectWithValue (message);
    }
  }
);

export const getUserRole = createAsyncThunk (
  'usersRole/get',
  async (email, thunkAPI) => {
    try {
      const token = thunkAPI.getState ().auth.user.token;
      return await userService.getUserHasRole (email, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString ();
      return thunkAPI.rejectWithValue (message);
    }
  }
);

// Get user users
export const getAllUsers = createAsyncThunk (
  'users/getAlll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState ().auth.user.token;
      return await userService.getAllUser (token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString ();
      return thunkAPI.rejectWithValue (message);
    }
  }
);

export const getAllUsersEntrepr = createAsyncThunk (
  'usersEntreprise/getAlll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState ().auth.user.token;
      return await userService.getAllUserEntreprise (token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString ();
      return thunkAPI.rejectWithValue (message);
    }
  }
);

// Get user users
export const getuserById = createAsyncThunk (
  'users/id',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState ().auth.user.token;
      return await userService.getUserId (id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString ();
      console.log (error);
      return thunkAPI.rejectWithValue (message);
    }
  }
);

// Delete user user
// export const deleteuser = createAsyncThunk (
//   'users/delete',
//   async (id, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState ().auth.user.token;
//       return await userService.deleteuser (id, token);
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

export const userSlice = createSlice ({
  name: 'user',
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase (register.pending, state => {
        state.isLoading = true;
      })
      .addCase (register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.usersEntrep.unshift (action.payload);
      })
      .addCase (register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.users = null;
      })
      .addCase (createUserRole.pending, state => {
        state.isLoading = true;
      })
      .addCase (createUserRole.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.userRole.unshift (action.payload);
      })
      .addCase (createUserRole.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase (getUserRole.pending, state => {
        state.isLoading = true;
      })
      .addCase (getUserRole.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userRole = action.payload;
      })
      .addCase (getUserRole.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase (getAllUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase (getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase (getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase (getAllUsersEntrepr.pending, state => {
        state.isLoading = true;
      })
      .addCase (getAllUsersEntrepr.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.usersEntrep = action.payload;
      })
      .addCase (getAllUsersEntrepr.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase (getuserById.pending, state => {
        state.isLoading = true;
      })
      .addCase (getuserById.fulfilled, (state, action) => {
        state.isLoading = true;
        state.isSuccess = true;
        state.usersId = action.payload;
      })
      .addCase (getuserById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {reset} = userSlice.actions;
export default userSlice.reducer;
