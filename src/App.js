import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import HowItWorks from "./components/pages/HowItWorks";
import Modules from "./components/pages/Modules";
import AboutUs from "./components/pages/AboutUs";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/how-it-works" exact element={<HowItWorks />} />
          <Route path="/modules" exact element={<Modules />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/sign-up" exact element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
