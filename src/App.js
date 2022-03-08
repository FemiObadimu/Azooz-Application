import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/Work";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/azooz/work" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
