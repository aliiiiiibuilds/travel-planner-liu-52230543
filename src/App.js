import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import DestinationDetails from "./pages/DestinationDetails";
import NotFound from "./pages/NotFound";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.classList.remove("body-light", "body-dark");
    document.body.classList.add(
      theme === "light" ? "body-light" : "body-dark"
    );
  }, [theme]);

  return (
    <div className={`app app-${theme}`}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <footer className="text-center text-muted py-3">
        <small>
          © {new Date().getFullYear()} TravelBuddy – Simple Travel Planner
        </small>
      </footer>
    </div>
  );
}

export default App;
