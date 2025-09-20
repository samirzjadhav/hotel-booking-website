import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Index from "./Components/Pages/Index";
import Footer from "./Components/Footer/Footer";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services";
import Room from "./Components/Pages/Room";
import RoomDetails from "./Components/Pages/RoomDetails";
import Checkout from "./Components/Pages/Chrckout";
import Blogs from "./Components/Pages/Blogs";

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
          <Route path="/rooms/:id" element={<RoomDetails />}></Route>
          <Route path="/checkout/:id" element={<Checkout />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
