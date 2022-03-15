import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";

import Notfound from "./components/Notfound";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/works" element={<Work />} />
          <Route exact path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
