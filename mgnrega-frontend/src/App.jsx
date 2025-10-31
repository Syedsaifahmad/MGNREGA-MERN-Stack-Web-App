import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import DistrictDetails from './pages/DistrictDetails/DistrictDetails';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/district/:district" element={<DistrictDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
