import React, { useState } from "react";
import FavouriteMovieItem from "./SubComponents/FavouriteMovieItem";
import { Button } from "react-bootstrap";

function FavouriteMoviesList(props) {
  const [favouriteMoviesAreVisible, setFavouriteMoviesAreVisible] =
    useState(false);

  const [favouriteMovies, setFavouriteMovies] = useState([
    {
      id: "1",
      value: "movie1",
    },
    {
      id: "2",
      value: "movie2",
    },
    {
      id: "3",
      value: "movie3",
    },
  ]);

  return (
    <div>
      <Button
        onClick={() => {
          favouriteMoviesAreVisible === true
            ? setFavouriteMoviesAreVisible(false)
            : setFavouriteMoviesAreVisible(true);
        }}
      >
        Show Favourite Movies
      </Button>
      {favouriteMovies &&
        favouriteMoviesAreVisible &&
        favouriteMovies.map((favouriteMovie) => (
          <FavouriteMovieItem favouriteMovie={favouriteMovie} />
        ))}
    </div>
  );
}

export default FavouriteMoviesList;
