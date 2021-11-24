import React from "react";
import ScreenContainer from "../Components/ScreenContainer";
import SearchForm from "../Components/SearchForm";
import MoviesList from "../Components/MoviesList";

import { Stack, Container, Row, Col } from "react-bootstrap";

function MovieSearchPage(props) {
  return (
    <ScreenContainer>
      <Container>
        <Row>
          <Col>
            <Stack gap={5}>
              <SearchForm />
              {/* <MoviesList variant={'favouriteMovies'} movies={movieSearchResults} /> */}
            </Stack>
          </Col>
        </Row>
      </Container>
    </ScreenContainer>
  );
}

export default React.memo(MovieSearchPage);
