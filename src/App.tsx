import React from "react";
import './App.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";

//Components

import NavBar from "./components/NavBar";
import HomeMain from "./components/public/HomeMain";
import Login from "./components/public/AuthComponents/Login";
import LoginExpert from "./components/public/AuthComponents/LoginExpert";
import LoginStudent from "./components/public/AuthComponents/LoginStudent";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import SignupStudent from "./components/public/AuthComponents/SignupStudent";
import SignupExpert  from "./components/public/AuthComponents/SignupExpert";
import Signup from "./components/public/AuthComponents/Signup";





const  App:React.FC=():JSX.Element=> {
  return (
    <React.Fragment>
      {/* make mobile nav */}
              <NavBar />
              <Routes>

                <Route path="/" element={<HomeMain />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/expert" element={<LoginExpert />} />
                <Route path="/login/student" element={<LoginStudent />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signup/student" element={<SignupStudent />} />
                <Route path="/signup/expert" element={<SignupExpert />} />
                <Route path="/signup/expert/next" element={<SignupExpert />} />
          
                <Route path="*" element={<NotFound />} />

              </Routes>
              <Footer />
       
      </React.Fragment>

  );
}

export default App;
