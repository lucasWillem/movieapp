import React from "react";
import PropTypes from "prop-types";

import "./Container.css";

function Container({ children, style }) {
  return (
    <div className="Container" style={style}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

export default React.memo(Container);
