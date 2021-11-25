import React, { useState } from "react";
import PropTypes from "prop-types";
import MoviesList from "../MoviesList";
import ToggleControl from "../ToggleControl";
import MovieTable from "../MovieTable";

import FavouriteMovies from "../FavouriteMovies";

import { useStoreActions, useStoreState } from "easy-peasy";

import {
  Form,
  FormControl,
  Container,
  Row,
  Col,
  Button,
  Stack,
} from "react-bootstrap";

function SearchForm({ placeholderText, actionButtonText, formTitle }) {
  const [searchText, setSearchText] = useState("");

  const fetchAndStoreMovieSearchResults = useStoreActions(
    (actions) => actions.fetchAndStoreMovieSearchResults
  );

  const setFavouriteMoviesVisibility = useStoreActions(
    (actions) => actions.setFavouriteMoviesVisibility
  );

  const movieSearchResults = useStoreState((state) => state.movieResults);
  const movieListVariation = useStoreState((state) => state.movieListVariation);
  const favouriteMoviesIsVisible = useStoreState(
    (state) => state.favouriteMoviesIsVisible
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

  return (
    <Container>
      <Form>
        <Stack gap={4}>
          <Row>
            <Col>
              <h4>{formTitle}</h4>
            </Col>
          </Row>
          <Row>
            <Col md={9} sm={9} xs={9}>
              <Form.Group controlId="movieSeachText">
                <FormControl
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                  placeholder={placeholderText}
                  value={searchText}
                />
              </Form.Group>
            </Col>
            <Col md={3} sm={3} xs={3}>
              <Stack direction="horizontal" gap={2}>
                <Button
                  variant="outline-dark"
                  type="submit"
                  disabled={searchText.trim().length === 0}
                  onClick={(e) => {
                    e.preventDefault();
                    fetchAndStoreMovieSearchResults(searchText);
                  }}
                >
                  {actionButtonText}
                </Button>

                {favouriteMoviesIsVisible ? (
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      setFavouriteMoviesVisibility(false);
                    }}
                  >
                    Back To Search
                  </Button>
                ) : (
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      setFavouriteMoviesVisibility(true);
                    }}
                  >
                    Show Favourites
                  </Button>
                )}
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col md={7} sm={7} xs={7}>
              {determineMovieDisplayComponent()}
            </Col>
            <Col md={5} sm={5} xs={5}>
              {movieSearchResults &&
                movieSearchResults.length > 0 &&
                !favouriteMoviesIsVisible && <ToggleControl />}
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}

SearchForm.defaultProps = {
  placeholderText: "Search through movies",
  actionButtonText: "Find",
  formTitle: "Find your favourite movies",
};

SearchForm.propTypes = {
  placeholderText: PropTypes.string,
  actionButtonText: PropTypes.string,
  formTitle: PropTypes.string,
};

export default React.memo(SearchForm);
