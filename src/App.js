import React, { useState, useEffect } from "react";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Navbar from "./components/Nav/Navbar";

import { Route, Routes } from "react-router-dom";
import Classes from "./Pages/Classes";
import Price from "./Pages/Price";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Loader from "./components/Loader";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <> 
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} /> 
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="pricing" element={<Price />} />
            <Route path="classes" element={<Classes />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />  
            <Route path="*" element={<NotFound/>} /> 
          </Routes> 
        </>
      )}
    </>
  );
}

export default App;
