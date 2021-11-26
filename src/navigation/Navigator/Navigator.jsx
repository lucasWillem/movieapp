import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieSearchPage from "../../pages/MovieSearchPage/MovieSearchPage";

function Navigator(props) {
  return (
    <Routes>
      <Route path="/" exact element={<MovieSearchPage />} />
    </Routes>
  );
}

export default React.memo(Navigator);
