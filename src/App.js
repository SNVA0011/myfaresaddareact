import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './view/Home';
import Pageerror from './Atoms/Pageerror';
import Header  from './Atoms/Header'  
import Footer from './Atoms/Footer';
import AboutUs from './view/AboutUs';
import Blog from './view/Blog';
import BlogDetails from './view/BlogDetails';
 
function App(props) {

  return (
    <>
      <div className="page-wrapper">
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/:blogid" element={<BlogDetails/>} />
            <Route path="*" element={<Pageerror/>} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App;

