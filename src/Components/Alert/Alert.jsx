import React from "react";
import "./Alert.css";

import { useStoreState, useStoreActions } from "easy-peasy";

import {
  Alert as BootstrapAlert,
  CloseButton,
  Col,
  Row,
  Fade,
} from "react-bootstrap";

function Alert(props) {
  const { isVisible, message } = useStoreState(
    (state) => state.alertConfiguration
  );

  const setAlertConfiguration = useStoreActions(
    (actions) => actions.setAlertConfiguration
  );

  return (
    <div
      style={{
        position: "fixed",
        top: 30,
        left: 50,
        right: 50,
      }}
    >
      {isVisible && (
        <BootstrapAlert
          onClose={() => {
            setAlertConfiguration({ isVisible: false, message: "" });
          }}
          variant="warning"
          dismissible
        >
          {message}
        </BootstrapAlert>
      )}
    </div>
  );
}

export default React.memo(Alert);
