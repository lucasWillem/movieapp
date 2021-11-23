import React from "react";
import "./LoadingDisplay.css";

import { useStoreState } from "easy-peasy";

import { Spinner, Row, Col } from "react-bootstrap";

function LoadingDisplay(props) {
  const isLoaderVisible = useStoreState((state) => state.isLoaderVisible);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 50,
        left: 0,
        right: 0,
      }}
    >
      {isLoaderVisible && <Spinner animation="border" role="status" />}
    </div>
  );
}

export default React.memo(LoadingDisplay);
