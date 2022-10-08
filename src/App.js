import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import UserForm from "./components/UserForm/UserForm";

function App() {
  return (
    <div className="w-full">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-user" element={<UserForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
