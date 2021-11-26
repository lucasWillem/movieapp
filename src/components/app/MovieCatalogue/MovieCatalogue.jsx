import React, { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { useStoreActions, useStoreState } from "easy-peasy";

import {
  Form,
  FormControl,
  Container as BootstrapContainer,
  Row,
  Col,
  Button,
  Stack,
} from "react-bootstrap";

import ToggleControl from "../../global/ToggleControl";
import Container from "../../global/Container";

import MoviesList from "./sub-components/MoviesList";
import MovieTable from "./sub-components/MovieTable";
import MovieCard from "./sub-components/MovieCard";
import MovieModal from "./sub-components/MovieModal";

function MovieCatalogue({
  placeholderText,
  searchButtonText,
  backToSearchButtonText,
  viewFavouritesButtonText,
  formTitle,
}) {
  const [searchText, setSearchText] = useState("");

  const movieSearchResults = useStoreState((state) => state.movieResults);
  const movieListVariation = useStoreState((state) => state.movieListVariation);
  const favouriteMovies = useStoreState((state) => state.favouriteMovies);
  const { isVisible: isMovieModalVisible } = useStoreState(
    (state) => state.modalConfiguration
  );
  const addToFavouriteMovies = useStoreActions(
    (actions) => actions.addToFavouriteMovies
  );
  const setModalConfiguration = useStoreActions(
    (actions) => actions.setModalConfiguration
  );
  const storeSelectedMovie = useStoreActions(
    (actions) => actions.storeSelectedMovie
  );
  const favouriteMoviesIsVisible = useStoreState(
    (state) => state.favouriteMoviesIsVisible
  );
  const selectedMovie = useStoreState((state) => state.selectedMovie);
  const setMovieListVariation = useStoreActions(
    (actions) => actions.setMovieListVariation
  );

  const fetchAndStoreMovieSearchResults = useStoreActions(
    (actions) => actions.fetchAndStoreMovieSearchResults
  );

  const setFavouriteMoviesVisibility = useStoreActions(
    (actions) => actions.setFavouriteMoviesVisibility
  );

  const removeFromFavouriteMovies = useStoreActions(
    (actions) => actions.removeFromFavouriteMovies
  );

  const setAlertConfiguration = useStoreActions(
    (actions) => actions.setAlertConfiguration
  );

  const fetchAndStoreSelectedMovie = useStoreActions(
    (actions) => actions.fetchAndStoreSelectedMovie
  );

  const resetStore = useCallback(() => {
    setModalConfiguration({ isVisible: false });
    storeSelectedMovie({});
  }, [setModalConfiguration, storeSelectedMovie]);

  const handleModalHidden = useCallback(() => resetStore(), [resetStore]);

  const addToFavourites = useCallback(
    (movie) => {
      addToFavouriteMovies(movie);
      resetStore();
    },
    [addToFavouriteMovies, resetStore]
  );

  const removeFromFavourites = useCallback(
    (movie) => {
      removeFromFavouriteMovies(movie);
      resetStore();
    },
    [removeFromFavouriteMovies, resetStore]
  );

  const handleSearchTextEntered = useCallback((e) => {
    e.stopPropagation();
    setSearchText(e.target.value);
  }, []);

  const handleSearchRequested = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setFavouriteMoviesVisibility(false);
      fetchAndStoreMovieSearchResults(searchText);
    },
    [fetchAndStoreMovieSearchResults, searchText, setFavouriteMoviesVisibility]
  );

  const handleFavouritesToggled = useCallback(
    (e) => {
      e.stopPropagation();

      favouriteMoviesIsVisible
        ? setFavouriteMoviesVisibility(false)
        : setFavouriteMoviesVisibility(true);
    },
    [favouriteMoviesIsVisible, setFavouriteMoviesVisibility]
  );

  const handleMovieListVariationChanged = useCallback(
    (e) => {
      e.stopPropagation();
      setMovieListVariation(e.currentTarget.value);
    },
    [setMovieListVariation]
  );

  const handleMovieCardClicked = useCallback(
    (movie) => {
      movieListVariation !== "favourites" &&
        fetchAndStoreSelectedMovie(movie.imdbID);
    },
    [fetchAndStoreSelectedMovie, movieListVariation]
  );

  const handleRemoveFromFavouritesClicked = useCallback(
    (movie) => {
      removeFromFavouriteMovies(movie);
      setAlertConfiguration({
        isVisible: true,
        message: "Item removed from Favourites",
      });
    },
    [removeFromFavouriteMovies, setAlertConfiguration]
  );

  const hasMoviesData = useMemo(
    () => movieSearchResults && movieSearchResults.length > 0,
    [movieSearchResults]
  );

  const isViewingFavouriteMovie = useMemo(
    () =>
      favouriteMovies.find(
        (faveMovie) => faveMovie.imdbID === selectedMovie.imdbID
      ) !== undefined,
    [favouriteMovies, selectedMovie.imdbID]
  );

  const hasSelectedAMovie = useMemo(
    () => Object.keys(selectedMovie).length > 0,
    [selectedMovie]
  );

  const displayComponent = useMemo(() => {
    if (favouriteMoviesIsVisible) {
      return (
        <MoviesList>
          {favouriteMovies.map((movie, index) => (
            <MovieCard
              key={`${movie.imdbID}-${index}`}
              movie={movie}
              variant={"favourites"}
              onClick={handleMovieCardClicked}
              onRemoveFromFavouritesClick={handleRemoveFromFavouritesClicked}
            />
          ))}
        </MoviesList>
      );
    }

    if (
      !favouriteMoviesIsVisible &&
      movieListVariation === "card" &&
      hasMoviesData
    ) {
      // prevent props overload

      return (
        <MoviesList>
          {movieSearchResults.map((movie, index) => (
            <MovieCard
              key={`${movie.imdbID}-${index}`}
              movie={movie}
              variant={"searchResults"}
              onClick={handleMovieCardClicked}
              onRemoveFromFavouritesClick={handleRemoveFromFavouritesClicked}
            />
          ))}
        </MoviesList>
      );
    }

    if (
      !favouriteMoviesIsVisible &&
      movieListVariation === "list" &&
      hasMoviesData
    ) {
      return <MovieTable movies={movieSearchResults} />;
    }
  }, [
    favouriteMovies,
    favouriteMoviesIsVisible,
    handleMovieCardClicked,
    handleRemoveFromFavouritesClicked,
    hasMoviesData,
    movieListVariation,
    movieSearchResults,
  ]);

  return (
    <BootstrapContainer>
      <Stack gap={2} lg={6}>
        <Row>
          <Col>
            <h4>{formTitle}</h4>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Stack gap={2}>
              <Form onSubmit={handleSearchRequested}>
                <Form.Group controlId="movieSeachText">
                  <FormControl
                    onChange={handleSearchTextEntered}
                    placeholder={placeholderText}
                    value={searchText}
                  />
                </Form.Group>
              </Form>
              <Stack
                style={{ display: "flex", flexWrap: "wrap", marginTop: 5 }}
                direction="horizontal"
                gap={2}
              >
                <Button
                  variant="outline-dark"
                  type="submit"
                  disabled={searchText.trim().length === 0}
                  onClick={handleSearchRequested}
                >
                  {searchButtonText}
                </Button>
                <Button
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    minwidth: 50,
                  }}
                  variant={
                    favouriteMoviesIsVisible
                      ? "outline-primary"
                      : "outline-primary"
                  }
                  onClick={handleFavouritesToggled}
                >
                  {favouriteMoviesIsVisible
                    ? backToSearchButtonText
                    : viewFavouritesButtonText}
                </Button>
                {hasMoviesData && !favouriteMoviesIsVisible ? (
                  <ToggleControl
                    onChange={handleMovieListVariationChanged}
                    value={movieListVariation}
                    radioButtonOptions={[
                      { name: "Card", value: "card" },
                      { name: "List", value: "list" },
                    ]}
                  />
                ) : (
                  <Container style={{ height: 50 }} />
                )}
              </Stack>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col lg={9}>
            <Container
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {displayComponent}
            </Container>
          </Col>
        </Row>
      </Stack>
      {hasSelectedAMovie && (
        <MovieModal
          movie={selectedMovie}
          isVisible={isMovieModalVisible}
          onModalHidden={handleModalHidden}
          onAddToFavourites={addToFavourites}
          onRemoveFromFavourites={removeFromFavourites}
          isAFavourite={isViewingFavouriteMovie}
        />
      )}
    </BootstrapContainer>
  );
}

MovieCatalogue.defaultProps = {
  placeholderText: "Search through movies",
  searchButtonText: "Find",
  viewFavouritesButtonText: "Favourites",
  backToSearchButtonText: "Search Again",
  formTitle: "Find your favourite movies",
};

MovieCatalogue.propTypes = {
  placeholderText: PropTypes.string,
  searchButtonText: PropTypes.string,
  viewFavouritesButtonText: PropTypes.string,
  backToSearchButtonText: PropTypes.string,
  formTitle: PropTypes.string,
};

export default React.memo(MovieCatalogue);
