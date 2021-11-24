import React from "react";
import ScreenContainer from "../Components/ScreenContainer";
import SearchForm from "../Components/SearchForm";
import FavouriteMovies from "../Components/FavouriteMovies";

import { Stack, Container, Row, Col } from "react-bootstrap";

function MovieSearchPage(props) {
  return (
    <ScreenContainer>
      <Container>
        <Row>
          <Col>
            <Stack gap={5}>
              <SearchForm />
              <FavouriteMovies />
            </Stack>
          </Col>
        </Row>
      </Container>
    </ScreenContainer>
  );
}

export default React.memo(MovieSearchPage);
