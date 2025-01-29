import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./Pages/Projects";
import Achievements from "./Pages/Achievements";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Testimonials from "./Pages/Testimonials";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Achievements" element={<Achievements />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
