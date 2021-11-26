import React, { useState } from "react";
import PropTypes from "prop-types";
import MoviesList from "../MoviesList";
import ToggleControl from "../ToggleControl";
import MovieTable from "../MovieTable";
import Container from "../Container";

import FavouriteMovies from "../FavouriteMovies";

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
                    onChange={(e) => {
                      setSearchText(e.target.value);
                    }}
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
                  onClick={(e) => {
                    e.preventDefault();
                    fetchAndStoreMovieSearchResults(searchText);
                  }}
                >
                  {actionButtonText}
                </Button>

                {
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
                    onClick={() => {
                      favouriteMoviesIsVisible
                        ? setFavouriteMoviesVisibility(false)
                        : setFavouriteMoviesVisibility(true);
                    }}
                  >
                    {favouriteMoviesIsVisible ? "Search Again" : "Favourites"}
                  </Button>
                }
                {movieSearchResults &&
                movieSearchResults.length > 0 &&
                !favouriteMoviesIsVisible ? (
                  <ToggleControl />
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
