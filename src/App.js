import React from "react";
import Home from "./Components/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Password from "./Components/Login/Password";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
       
        <Route path="/forgotPassword" element={<Password />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
