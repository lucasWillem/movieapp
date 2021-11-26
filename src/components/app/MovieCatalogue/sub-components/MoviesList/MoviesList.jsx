import React from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";

import "./MoviesList.css";
function MoviesList({ children }) {
  return (
    <Container>
      <Row>{children}</Row>
    </Container>
  );
}

MoviesList.propTypes = {
  children: PropTypes.node,
};

export default React.memo(MoviesList);
