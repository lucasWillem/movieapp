import { BrowserRouter } from "react-router-dom";
import Navigator from "./Navigator";
import "bootstrap/dist/css/bootstrap.min.css";

import LoadingDisplay from "./Components/LoadingDisplay";
import Alert from "./Components/Alert";
import Modal from "./Components/Modal";

function App() {
  return (
    <div className="App">
      <LoadingDisplay />
      <Alert />
      <Modal />
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    </div>
  );
}

export default App;
