import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useStoreRehydrated } from "easy-peasy";
import { Spinner } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from "navigation/Navigator";
import LoadingDisplay from "components/global/LoadingDisplay";
import Alert from "components/global/Alert";

require("dotenv").config();

function App() {
  const storeIsRehydrated = useStoreRehydrated();

  return (
    <div className="App">
      {storeIsRehydrated ? (
        <>
          <LoadingDisplay />
          <Alert />
          <BrowserRouter>
            <Navigator />
          </BrowserRouter>
        </>
      ) : (
        <div
          style={{
            marginTop: "5%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Spinner animation="border" role="status" />
        </div>
      )}
    </div>
  );
}

export default App;
