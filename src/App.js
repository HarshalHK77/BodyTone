import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Schedule from "./pages/Schedule";
import Pricing from "./pages/Pricing";

import "./App.css";
import Classess from "./pages/Classes";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/classes" element={<Classess />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
