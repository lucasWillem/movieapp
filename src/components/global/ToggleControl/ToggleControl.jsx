import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

import Container from "components/global/Container";

function ToggleControl({ onChange, value, radioButtonOptions }) {
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
            checked={value === radio.value}
            onChange={onChange}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </Container>
  );
}

ToggleControl.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  radioButtonOptions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default React.memo(ToggleControl);
