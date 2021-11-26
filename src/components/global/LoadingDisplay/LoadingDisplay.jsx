import React from "react";
import { useStoreState } from "easy-peasy";
import { Spinner } from "react-bootstrap";

import "./LoadingDisplay.css";

function LoadingDisplay(props) {
  const isLoaderVisible = useStoreState((state) => state.isLoaderVisible);

  const loadingDisplay = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 50,
    left: 0,
    right: 0,
  };

  return (
    <div style={loadingDisplay}>
      {isLoaderVisible && <Spinner animation="border" role="status" />}
    </div>
  );
}

export default React.memo(LoadingDisplay);
