import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Aboutme from "./pages/Aboutme";
import Navbar from "./components/global/Navbar";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import HairsalonProject from "./components/Projects/HairsalonProject";
import Teamproject from "./components/Projects/Teamproject";
import WeatherWebsite from "./components/Projects/WeatherWebsite";
import PasswordManager from "./components/Projects/PasswordManager";
import ProjectOverview from "./pages/ProjectOverview";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<Aboutme />} />
          <Route path="/projects/:slug" element={<ProjectOverview />} />
          <Route path="/Contact" element={<ContactMe />} />
          <Route path="/Projects/HairSalon" element={<HairsalonProject />} />
          <Route path="/Projects/TeamProject" element={<Teamproject />} />
          <Route path="/Projects/WeatherWebsite" element={<WeatherWebsite />} />
          <Route
            path="/Projects/PasswordManager"
            element={<PasswordManager />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
