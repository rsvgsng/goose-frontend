import React, { useEffect, useState } from "react";
import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';

//Components

import HomeMain from "./components/public/HomeMain";
import Login from "./components/public/AuthComponents/Login";
import LoginExpert from "./components/public/AuthComponents/LoginExpert";
import LoginStudent from "./components/public/AuthComponents/LoginStudent";
import Footer from "./components/Footer";
import SignupStudent from "./components/public/AuthComponents/SignupStudent";
import SignupExpert from "./components/public/AuthComponents/SignupExpert";
import Signup from "./components/public/AuthComponents/Signup";
import DocumentsStep from "./components/public/AuthComponents/DocumentsStep";
import Dashboard from "./components/public/PrivateComponents/ExpertComponents/Dashboard/Dashboard";
import Layout from "./components/Layout";
import Main from "./components/public/PrivateComponents/ExpertComponents/Main";
import Assignment from "./components/public/PrivateComponents/ExpertComponents/Dashboard/Assignment";
import { useDispatch } from "react-redux";
import { isLoggedSlice } from "./store/Slices/isLogged";

const App: React.FC = (): JSX.Element => {

  const dispatch = useDispatch();
  const { isLogged } = useSelector((state: any) => state.isLoggedIn);
  const {code,msg} = useSelector((state: any) => state.dashboard.data);

  const [cl, setCl] = useState<Boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token)
    dispatch(isLoggedSlice.actions.login());
    console.log(code)
    setCl(false);

  }, [])

  if(cl) return <div></div>
  return (


    <Routes>

      {
        !isLogged  ?
      <Route element={<Layout />} >
        <Route path="/" element={<HomeMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/expert" element={<LoginExpert />} />
        <Route path="/login/student" element={<LoginStudent />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/student" element={<SignupStudent />} />
        <Route path="/signup/expert" element={<SignupExpert />} />
      </Route>

      
      :
          code==400 || code == 403 ?

          <Route element={<Main />} >
            <Route path="/" element={<DocumentsStep />} />
            <Route path="/About" element={<>Without Verifying you cannot proceed further</>} />
          </Route>
      
      :
      
      <Route element={<Main/>}>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Assignment" element={<Assignment/>} />
        <Route path="/Settings" element={<>settings page</>} />
      </Route>
      }


      <Route path="*" element={
      <Navigate to="/" />
      } />


    </Routes>

  )
}

export default App;


function Home() {
  return (<h1>Welcome to dashboard</h1>)
}
function About() {
  return (<h1>Welcome to about</h1>)
}
function Settings() {
  return (<h1>Settings Page</h1>)
}
function Notfound() {
  return (<h1>Not found</h1>)
}



