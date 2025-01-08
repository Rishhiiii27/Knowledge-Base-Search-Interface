import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
    loading: false,
  },
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setResults, setLoading } = searchSlice.actions;

export const selectSearchResults = (state) => state.search.results;

export default searchSlice.reducer;
