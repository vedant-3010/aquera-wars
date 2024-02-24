import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchResidents = createAsyncThunk(
  'residents/fetchResidents',
  async (residentUrls) => {
    const residents = await Promise.all(
      residentUrls.map((residentUrl) => axios.get(residentUrl))
    );
    return residents.map((response) => response.data);
  }
);

const residentsSlice = createSlice({
  name: 'residents',
  initialState: {
    residents: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    clearResidents(state) {
      state.residents = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResidents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchResidents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.residents = action.payload;
      })
      .addCase(fetchResidents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearResidents } = residentsSlice.actions;

export default residentsSlice.reducer;
