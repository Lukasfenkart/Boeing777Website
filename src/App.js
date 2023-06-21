import logo from "./logo.svg";
import "./App.css";
import Startseite from "./Pages/Startseite";
import { Routes, Route } from "react-router-dom";
import Technic from "./Pages/Technic";
import Variants from "./Pages/Variants";
import History from "./Pages/History";
import Destinations from "./Pages/Destinations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Startseite />} />
      <Route path="/history" element={<History />} />
      <Route path="/variants" element={<Variants />} />
      <Route path="/technic" element={<Technic />} />
      <Route path="/destinations" element={<Destinations />} />
    </Routes>
  );
}

export default App;
