import React from "react";
import "./ScreenContainer.css";

function ScreenContainer(props) {
  const { children } = props;
  return <div className="ScreenContainer">{children}</div>;
}

export default React.memo(ScreenContainer);
