import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useStoreRehydrated, useStoreActions, useStoreState } from "easy-peasy";

import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from "navigation/Navigator";
import LoadingDisplay from "components/global/LoadingDisplay";
import Alert from "components/global/Alert";

require("dotenv").config();

function App() {
  const storeIsRehydrated = useStoreRehydrated();

  const setLoaderVisibility = useStoreActions(
    (actions) => actions.setLoaderVisibility
  );

  const isLoaderVisible = useStoreState((state) => state.isLoaderVisible);

  useEffect(() => {
    !storeIsRehydrated ? setLoaderVisibility(true) : setLoaderVisibility(false);
  }, [setLoaderVisibility, storeIsRehydrated]);

  return (
    <div className="App">
      {isLoaderVisible ? (
        <LoadingDisplay />
      ) : (
        <>
          <LoadingDisplay />
          <Alert />
          <BrowserRouter>
            <Navigator />
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
