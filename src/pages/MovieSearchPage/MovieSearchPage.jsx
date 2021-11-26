import React from "react";
import Container from "../../components/global/Container";
import MovieCatalogue from "../../components/app/MovieCatalogue";

import { Stack, Row, Col } from "react-bootstrap";

function MovieSearchPage(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Stack gap={5}>
            <MovieCatalogue />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default React.memo(MovieSearchPage);
