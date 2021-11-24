import React from "react";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

import { useStoreActions } from "easy-peasy";

import imageNotFound from "../../../assets/images/image-not-found.png";

import { Row, Col, Image, Button, Stack } from "react-bootstrap";

function MovieListItem({ movie }) {
  const addToFavouriteMovies = useStoreActions(
    (actions) => actions.addToFavouriteMovies
  );

  return (
    <ListGroup>
      <ListGroup.Item>
        <Row>
          <Col>
            <Image
              alt={movie.Title}
              src={movie.Poster === "N/A" ? imageNotFound : movie.Poster}
              thumbnail
              fluid
            />
          </Col>
          <Col>
            <h3>
              {movie.Title} ({movie.Year})
            </h3>
          </Col>
          <Row lg={4} style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={(e) => {
                e.preventDefault();
                addToFavouriteMovies(movie);
              }}
              variant="outline-dark"
            >
              Add To Favourites
            </Button>
          </Row>
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
