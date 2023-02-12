import "./App.css";
import NotePage from "./pages/NotePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<NotePage />} />
      </Routes>
    </Router>
    // </div>
  );
}

export default App;
