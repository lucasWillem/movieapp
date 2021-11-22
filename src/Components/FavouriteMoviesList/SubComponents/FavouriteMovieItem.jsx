import React from "react";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

function FavouriteMovieItem({ favouriteMovie }) {
  return (
    <>
      <ListGroup>
        <ListGroup.Item>{favouriteMovie.value}</ListGroup.Item>
      </ListGroup>
    </>
  );
}

FavouriteMovieItem.propTypes = {
  favouriteMovieItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(FavouriteMovieItem);
