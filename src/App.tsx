import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Aboutme from "./pages/Aboutme";
import Navbar from "./components/global/Navbar";
import Projects from "./components/ProjectList";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import Sidebar from "./components/global/Sidebar";
import sidebarStyle from "./Styling/global/sidebarStyle.module.scss";
import HairsalonProject from "./components/Projects/HairsalonProject";
import Teamproject from "./components/Projects/Teamproject";
import WeatherWebsite from "./components/Projects/WeatherWebsite";
import PasswordManager from "./components/Projects/PasswordManager";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowButton(scrollPosition > 0); // Show button when scrolling down
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Show Navbar */}
        <Navbar />
        {/* Show Button if you scroll down */}
        {showButton && (
          <div
            className={`${sidebarStyle.floatingBtn} ${
              showSidebar ? sidebarStyle.open : ""
            }`}
            onClick={toggleSidebar}
          >
            <div className={sidebarStyle.bar1}></div>
            <div className={sidebarStyle.bar2}></div>
            <div className={sidebarStyle.bar3}></div>
          </div>
        )}
        {/* Show sidebar if you click the button */}
        <Sidebar showSidebar={showSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<Aboutme />} />
          <Route path="/Projects" element={<Projects />} />
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
