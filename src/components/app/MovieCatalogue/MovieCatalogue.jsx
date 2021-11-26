import React, { useState, useCallback } from "react";
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
import FavouriteMovies from "./sub-components/FavouriteMovies";

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

  const favouriteMoviesIsVisible = useStoreState(
    (state) => state.favouriteMoviesIsVisible
  );

  const setMovieListVariation = useStoreActions(
    (actions) => actions.setMovieListVariation
  );

  const fetchAndStoreMovieSearchResults = useStoreActions(
    (actions) => actions.fetchAndStoreMovieSearchResults
  );

  const setFavouriteMoviesVisibility = useStoreActions(
    (actions) => actions.setFavouriteMoviesVisibility
  );

  function determineMovieDisplayComponent() {
    if (favouriteMoviesIsVisible) {
      return <FavouriteMovies />;
    }

    if (!favouriteMoviesIsVisible && movieListVariation === "card") {
      return <MoviesList movies={movieSearchResults} variant="searchResults" />;
    }

    if (!favouriteMoviesIsVisible && movieListVariation === "list") {
      return <MovieTable movies={movieSearchResults} />;
    }
  }

  const handleSearchTextEntered = useCallback((e) => {
    e.stopPropagation();
    setSearchText(e.target.value);
  }, []);

  const handleSearchRequested = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      fetchAndStoreMovieSearchResults(searchText);
    },
    [fetchAndStoreMovieSearchResults, searchText]
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
              <Form>
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
                {movieSearchResults &&
                movieSearchResults.length > 0 &&
                !favouriteMoviesIsVisible ? (
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
              {determineMovieDisplayComponent()}
            </Container>
          </Col>
        </Row>
      </Stack>
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
