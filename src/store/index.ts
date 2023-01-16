import { configureStore } from "@reduxjs/toolkit";
import countriesRreducer from "./slices/countriesSlice";

const store = configureStore({ reducer: { countries: countriesRreducer } });

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch