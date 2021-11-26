import React from "react";
import { useStoreState } from "easy-peasy";
import { Spinner } from "react-bootstrap";

import "./LoadingDisplay.css";

function LoadingDisplay(props) {
  const isLoaderVisible = useStoreState((state) => state.isLoaderVisible);

  return (
    <div className={"loading-display-wrapper"}>
      {isLoaderVisible && <Spinner animation="border" role="status" />}
    </div>
  );
}

export default React.memo(LoadingDisplay);
