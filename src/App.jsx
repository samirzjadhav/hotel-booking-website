import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Index from "./Components/Pages/Index";
import Footer from "./Components/Footer/Footer";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services";
import Room from "./Components/Pages/Room";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/rooms" element={<Room />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
