import { BrowserRouter } from "react-router-dom";
import Navigator from "./Navigator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    </div>
  );
}

export default App;
