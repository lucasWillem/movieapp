import { BrowserRouter } from "react-router-dom";
import Navigator from "./Navigator";
import "bootstrap/dist/css/bootstrap.min.css";

import LoadingDisplay from "./Components/LoadingDisplay";

function App() {
  return (
    <div className="App">
      <LoadingDisplay />
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    </div>
  );
}

export default App;
