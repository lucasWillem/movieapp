import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigator from "./navigation/Navigator";

import LoadingDisplay from "./components/global/LoadingDisplay";
import Alert from "./components/global/Alert";

require("dotenv").config();

function App() {
  return (
    <div className="App">
      <LoadingDisplay />
      <Alert />
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    </div>
  );
}

export default App;
