import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../utils/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
  const snapshot = await getDocs(collection(db, 'employees'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

const employeeSlice = createSlice({
  name: 'employees',
  initialState: { list: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
      });
  },
});

export default employeeSlice.reducer;


