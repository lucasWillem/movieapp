import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { useStoreActions, useStoreState } from "easy-peasy";

import { ButtonGroup, ToggleButton } from "react-bootstrap";

function ToggleControl({ radioButtonOptions }) {
  const setMovieListVariation = useStoreActions(
    (actions) => actions.setMovieListVariation
  );

  const movieListVariation = useStoreState((state) => state.movieListVariation);

  return (
    <div style={{ marginTop: 20 }}>
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
              setMovieListVariation(e.currentTarget.value);
            }}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}

ToggleControl.defaultProps = {
  radioButtonOptions: [
    { name: "Card View", value: "card" },
    { name: "List View", value: "list" },
  ],
};

export default React.memo(ToggleControl);
