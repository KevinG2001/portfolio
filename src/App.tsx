import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Aboutme from "./pages/Aboutme";
import Navbar from "./components/global/Navbar";
import Projects from "./pages/ProjectsPage";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<Aboutme />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
