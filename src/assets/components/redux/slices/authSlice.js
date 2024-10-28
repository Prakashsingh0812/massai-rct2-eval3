import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, googleProvider } from '../../utils/firebaseConfig';
 // Updated path
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export const loginWithEmail = createAsyncThunk('auth/loginWithEmail', async ({ email, password }) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
});

export const loginWithGoogle = createAsyncThunk('auth/loginWithGoogle', async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, status: 'idle', role: null },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.role = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginWithEmail.fulfilled, (state, action) => {
        state.user = action.payload;
        state.role = action.payload.email === 'admin@example.com' ? 'admin' : 'user';
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.user = action.payload;
        state.role = 'user';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
