import logo from "./logo.svg";
import Partner from "./components/Partner/Partner";
import Footer from "./components/Footer/Footer";
import Accelerator from "./components/Accelerator/accelerator";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Accelerator />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
