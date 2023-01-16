import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type Country = {
  borders?: Array<string>;
  flag: string;
  capital: string;
  flags: { svg: string; png: string };
  name: string;
  nativeName: string;
  subregion: string;
  population: number;
  region: string;
  independent: boolean;
  alpha3Code: string;
  topLevelDomain: Array<string>;
  currencies?: { name: string; symbol: string }[];
  languages: { name: string }[];
};

export const fetchCountries = createAsyncThunk<Country[], undefined>(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get("https://restcountries.com/v2/all");

    return response?.data;
  }
);

interface CountriesState {
  list: Country[];
  loading: boolean;
}

const initialState: CountriesState = {
  list: [],
  loading: false,
};
const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      }),
});

export default countriesSlice.reducer;
