import "assets/css/app.css";
import { Details } from "pages/Details";
import { HomePage } from "pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/categories/:idc" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
