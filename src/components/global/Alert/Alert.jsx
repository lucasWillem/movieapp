import React, { useCallback } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Alert as BootstrapAlert } from "react-bootstrap";

import "./Alert.css";

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

  const handleOnModalClose = useCallback(() => {
    setAlertConfiguration({ isVisible: false, message: "" });
  }, [setAlertConfiguration]);

  return (
    <>
      {isVisible && (
        <BootstrapAlert
          style={alertStyles}
          onClose={handleOnModalClose}
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
