import React from "react";
import Container from "../Components/Container";
import SearchForm from "../Components/SearchForm";

import { Stack, Row, Col } from "react-bootstrap";

function MovieSearchPage(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Stack gap={5}>
            <SearchForm />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default React.memo(MovieSearchPage);
