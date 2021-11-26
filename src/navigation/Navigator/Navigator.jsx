import React from "react";
import { Route, Routes } from "react-router-dom";
import { paths } from "../paths";
import MovieSearchPage from "../../pages/MovieSearchPage/MovieSearchPage";

const { root } = paths;

function Navigator(props) {
  return (
    <Routes>
      <Route path={root} exact element={<MovieSearchPage />} />
    </Routes>
  );
}

export default React.memo(Navigator);
