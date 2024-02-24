// PlanetsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPlanets = createAsyncThunk("planets/fetchPlanets", async (page) => {
  const response = await axios.get(
    `https://swapi.dev/api/planets/?page=${page}&format=json`
  );
  return response.data;
});

const planetsSlice = createSlice({
  name: "planets",
  initialState: {
    planets: [],
    currentPage: 1,
    next: null,
    previous: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlanets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPlanets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.planets = action.payload.results;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.currentPage = action.meta.arg;
      })
      .addCase(fetchPlanets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export { fetchPlanets };

export default planetsSlice.reducer;
