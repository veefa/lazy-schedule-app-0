import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LazySchedulePage from "./pages/LazySchedulePage";
import "./index.css";

function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToHash />
      <div className="bg-indigo-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Contact />
              </>
            }
          />
          <Route path="/lazy-schedule" element={<LazySchedulePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
