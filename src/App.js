import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/About Us/AboutUs";
import ContactUs from "./Pages/Contact Us/ContactUs";
import Properties from "./Pages/Properties/Properties";
import Blog from "./Pages/Blog/Blog";

function App() {
  const [transparenncy, setTransparency] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const scrollThreshold = 100;

      if (scrollY > scrollThreshold) {
        setTransparency(false);
      } else {
        setTransparency(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <Header transparent={transparenncy} />
        <Navbar transparent={transparenncy} />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={AboutUs} />
          <Route path="/contact" Component={ContactUs} />
          <Route path="/properties" Component={Properties} />
          <Route path="/blog" Component={Blog} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
