import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./compoments/Home";
import Navbar from "./compoments/Navbar";
import About from "./compoments/About";
import Contact from "./compoments/Contact";
import Footer from "./compoments/Footer";
import LazySchedulePage from "./pages/LazySchedulePage";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
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
