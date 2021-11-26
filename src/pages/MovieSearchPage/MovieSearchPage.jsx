import React from "react";
import { Stack, Row, Col } from "react-bootstrap";

import Container from "components/global/Container";
import MovieCatalogue from "components/app/MovieCatalogue";

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
