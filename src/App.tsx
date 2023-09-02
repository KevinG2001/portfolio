import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Aboutme from "./pages/Aboutme";
import Navbar from "./components/global/Navbar";

function App() {
  return (
      <Router>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Aboutme />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
