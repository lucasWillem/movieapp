import React from "react";
import "./MoviesList.css";
import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

function MoviesList({ children }) {
  return (
    <Container>
      <Row>{children}</Row>
    </Container>
  );
}

MoviesList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default React.memo(MoviesList);
