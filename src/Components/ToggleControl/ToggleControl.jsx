import React, { useState } from "react";
import PropTypes from "prop-types";

import { useStoreActions } from "easy-peasy";

import { ButtonGroup, ToggleButton } from "react-bootstrap";

function ToggleControl({ radioButtonOptions }) {
  const [radioValue, setRadioValue] = useState("card");

  const setMovieListVariation = useStoreActions(
    (actions) => actions.setMovieListVariation
  );

  React.useEffect(() => {
    setMovieListVariation(radioValue);
  }, [radioValue, setMovieListVariation]);

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
            checked={radioValue === radio.value}
            onChange={(e) => {
              setRadioValue(e.currentTarget.value);
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
