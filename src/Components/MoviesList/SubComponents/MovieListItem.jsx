import React from "react";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

import imageNotFound from "../../../assets/images/image-not-found.png";

import { Row, Col, Image } from "react-bootstrap";

function MovieListItem({ movie }) {
  return (
    <ListGroup>
      <ListGroup.Item>
        <Row>
          <Col md={2} sm={2} xs={2}>
            <Image
              alt={movie.Title}
              src={movie.Poster === "N/A" ? imageNotFound : movie.Poster}
              thumbnail
              fluid
            />
          </Col>
          <Col md={3} sm={3} xs={3}>
            <p>
              {movie.Title} ({movie.Year})
            </p>
          </Col>
        </Row>
      </ListGroup.Item>
    </ListGroup>
  );
}

// MovieListItem.propTypes = {
//   MovieListItem: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default React.memo(MovieListItem);
