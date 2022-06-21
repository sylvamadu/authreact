import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Forgot from "./pages/Forgot";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Price from "./pages/Price";

function Content() {
  return (
    //seperate pages route where we want the navbar and navbar and footer to display on
    //the pages would be switched here while the navbar and footer are configured in the default layout page
    <Routes>
      <Route path="features" element={<Features />} />
      <Route path="terms" element={<Terms />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="faq" element={<Faq />} />
      <Route path="forgot" element={<Forgot />} />
      <Route exact path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="pricing" element={<Price />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Content;
