import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import Navbar from "./components/navbar";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Home from "./screens/Home/";

const App = () => {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </div>
  );
};

export default App;