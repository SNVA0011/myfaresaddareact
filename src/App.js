import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './view/Home';
import Pageerror from './Atoms/Pageerror';
import Header  from './Atoms/Header'  
import Footer from './Atoms/Footer';
import AboutUs from './view/AboutUs';
import Blog from './view/Blog';
import BlogDetails from './view/BlogDetails';
import CustomizeTravelPage from './view/CustomizeTravelPage';
import CheapFlights from './view/CheapFlights';
 
function App(props) {

  return (
    <>
      <div className="page-wrapper">
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route exact path="/about-us" element={<AboutUs/>} />
            <Route exact path="/blog" element={<Blog/>} />
            <Route exact path="/blog/:blogid" element={<BlogDetails/>} />
            <Route exact path="/customize/:customizeid" element={<CustomizeTravelPage/>} />
            <Route exact path="/cheap-flights/:cheapflightsid" element={<CheapFlights/>} />
            <Route path="*" element={<Pageerror/>} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App;

