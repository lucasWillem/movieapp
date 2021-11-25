import React from "react";
import "./Container.css";

function Container({ children, style }) {
  return (
    <div className="Container" style={style}>
      {children}
    </div>
  );
}

export default React.memo(Container);
