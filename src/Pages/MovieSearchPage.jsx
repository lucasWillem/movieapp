import React from "react";
import ScreenContainer from "../Components/ScreenContainer";
import SearchForm from "../Components/SearchForm";
import MoviesList from "../Components/MoviesList";

import { useStoreState } from "easy-peasy";

import { Stack, Container, Row, Col } from "react-bootstrap";

function MovieSearchPage(props) {
  const movieSearchResults = useStoreState((state) => state.movieResults);

  return (
    <ScreenContainer>
      <Container>
        <Row>
          <Col>
            <Stack gap={5}>
              <SearchForm movieSearchResults={movieSearchResults} />
              {/* <MoviesList variant={'favouriteMovies'} movies={movieSearchResults} /> */}
            </Stack>
          </Col>
        </Row>
      </Container>
    </ScreenContainer>
  );
}

export default React.memo(MovieSearchPage);
