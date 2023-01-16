import React, { useEffect } from "react";
import useAppDispatch from "./hooks/useAppDispatch";
import { fetchCountries } from "./store/slices/countriesSlice";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="country/:name" element={<Detail />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
export default App;
