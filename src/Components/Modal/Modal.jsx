import React from "react";
import "./Modal.css";

import { useStoreState, useStoreActions } from "easy-peasy";

import { Modal as BootstrapModal } from "react-bootstrap";

function Modal(props) {
  const { isVisible, content } = useStoreState(
    (state) => state.modalConfiguration
  );

  React.useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);

  return (
    <BootstrapModal show={isVisible} fullscreen={true}>
      {/* <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{content && content.Title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>Modal body content</BootstrapModal.Body> */}
    </BootstrapModal>
  );
}

export default React.memo(Modal);
