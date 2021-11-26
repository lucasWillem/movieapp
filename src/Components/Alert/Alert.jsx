import React from "react";
import "./Alert.css";

import { useStoreState, useStoreActions } from "easy-peasy";
import { Alert as BootstrapAlert } from "react-bootstrap";

function Alert(props) {
  const { isVisible, message } = useStoreState(
    (state) => state.alertConfiguration
  );

  const setAlertConfiguration = useStoreActions(
    (actions) => actions.setAlertConfiguration
  );

  const alertStyles = {
    position: "fixed",
    top: "5%",
    left: "5%",
    right: "5%",
    zIndex: 100,
  };

  return (
    <>
      {isVisible && (
        <BootstrapAlert
          style={alertStyles}
          onClose={() => {
            setAlertConfiguration({ isVisible: false, message: "" });
          }}
          variant="primary"
          dismissible
        >
          {message}
        </BootstrapAlert>
      )}
    </>
  );
}

export default React.memo(Alert);
