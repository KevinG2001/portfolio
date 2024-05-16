import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Aboutme from "./pages/Aboutme";
import Navbar from "./components/global/Navbar";
import Projects from "./pages/ProjectsPage";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import Sidebar from "./components/global/Sidebar";
import sidebarStyle from "./Styling/global/sidebarStyle.module.scss";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
