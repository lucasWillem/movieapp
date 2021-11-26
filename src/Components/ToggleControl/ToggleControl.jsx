import React from "react";
import "./ToggleControl.css";
import PropTypes from "prop-types";

import Container from "../Container";

import { useStoreActions, useStoreState } from "easy-peasy";

import { ButtonGroup, ToggleButton } from "react-bootstrap";

function ToggleControl({ radioButtonOptions }) {
  const setMovieListVariation = useStoreActions(
    (actions) => actions.setMovieListVariation
  );

  const movieListVariation = useStoreState((state) => state.movieListVariation);

  return (
    <Container
      style={{
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ButtonGroup>
        {radioButtonOptions.map((radio, index) => (
          <ToggleButton
            key={index}
            id={`radio-${index}`}
            type="radio"
            variant="primary"
            name="radio"
            value={radio.value}
            checked={movieListVariation === radio.value}
            onChange={(e) => {
              e.stopPropagation();
              setMovieListVariation(e.currentTarget.value);
            }}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </Container>
  );
}

ToggleControl.defaultProps = {
  radioButtonOptions: [
    { name: "Card", value: "card" },
    { name: "List", value: "list" },
  ],
};

ToggleControl.propTypes = {
  radioButtonOptions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default React.memo(ToggleControl);
